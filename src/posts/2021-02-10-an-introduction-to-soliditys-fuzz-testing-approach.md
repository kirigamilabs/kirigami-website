---
layout: post
published: true
title: An Introduction to Solidity's Fuzz Testing Approach
date: '2021-02-10'
author: Bhargava Shastry
category: Explainers
---

Security vulnerabilities and bugs detract from software quality.
To discover them early, at best before they are released, we have adopted fuzz testing: feeding randomly generated programs to the Solidity compiler and observing the compilation runtime and code generated.

Since Q1 2019, the Solidity compiler is fuzz tested via Google's [open-source software fuzz][1] (oss-fuzz) framework.

In this post, we briefly describe the work that has been done on this front, and work that is currently in progress.

### Fuzzer Overview

Broadly speaking, we have developed two classes of fuzzers:

- Front-end fuzzers that test the compiler front-end (parser/analyser).
- Back-end fuzzers that test the compiler back-end (optimiser).

### Front-end Fuzzers

We have developed front-end fuzzers in order to test if programs are parsed and analysed correctly.
Front-end fuzzing comprises mutating existing test cases (most often unit tests) in order to test how parsing and program analysis respond to corner case input.

Fuzzing is effective because the Solidity compiler makes heavy use of assertions both during the input program parsing/analysis phase as well as the code generation phase.
Inputs generated by front-end fuzzers may fail such assertions, signalling an error in the compiler.

#### Example bug found by front-end fuzzer

Solidity implements the [NatSpec format][3] for code documentation.
The front-end fuzzer generated the following program that led to an assertion failure in the compiler (see Notes for more information):

```
contract C {
    ///@return
    modifier m22 {}
}

contract D is C {
    modifier m22 {}
}
```

The program was presumably mutated from the following perfectly valid test program.

```
contract C {
    modifier m22 { _; }
}
contract D is C {
}
```

The mutations prepended the `///@return` line to the modifier declaration and copied the modifier declaration to the derived contract.

A natural question is the following: How did the fuzzer "know" that this particular mutation will lead to an error?
The answer is that it does not know; the fuzzer simply mutates existing input to create new inputs and it just so happened that this mutation discovered a bug.
A follow-up question could be: How are mutations created?
Broadly speaking, mutations fall into one of the following categories:

- Flipping bits at certain positions in the input stream.
- Adding bits possibly supported by a hand-written dictionary.
- Shuffling bits.
- Removing bits.

Since Solidity programs are strings, it may be useful to think of the mutation classes in terms of characters (e.g., `a-z`) than bits.

A second follow-up question could be: Wait a minute! Random mutations are rarely useful? In which case, how can they find bugs?
The short answer is yes, they are rarely useful if the end-goal is to create a valid program.
For example it is a lot more likely to mutate `if (true) {}` into `iff (true) {}` (suffix `f` to the `if` keyword) than `if (false) {}`.
The likely mutation is simply going to lead to a parsing error which is rather uninteresting.
But please bear in mind that the goal here is to test the compiler front-end, and to this end, random mutations are rather useful.
Especially programs generated by a mix of randomness and human support (dictionary of Solidity keywords).
This is borne out by the test case generated by the fuzzer by, among other things, prepending the `///@return` NatSpec comment.

If you are curious as to how the fuzzer may have "synthesised" the NatSpec comment, one of the ways (caution: pure speculation) is the following:

- In some fuzzer run `N`, adding dictionary token "//" (i.e., comment syntax in Solidity).
- In run `N' > N`, adding dictionary token "return".
- Finally, arriving at `///@return` through a sequence of additions/shuffling.

The Solidity fuzzing dictionary [may be found here][5].
If you spot omissions (especially those that may yield interesting mutants), please let us know.
PRs welcome. :-)

We would like to thank external contributors Alex Groce and Charalambos Mitropoulos for independently fuzzing the Solidity compiler and reporting bugs.

**Notes**:

This [issue][4] is a few months old and has been fixed in `0.7.6`.
The issue is that Solidity modifiers don't have return variables, and hence a `@return` NatSpec tag does not make sense.
The program above should have resulted in a parsing error (which is what the fix ensures) but instead resulted in a failed assertion.

### Back-end Fuzzers

In order to test if code generation is sound, a valid program (input) needs to be fed to the compiler.
If the program contains syntactic (`iff` instead of `if`) or semantic (use undeclared identifier) errors, it won't be accepted by the compiler.
Semantic fuzzers are designed to ensure program input does not contain such errors.

To implement semantic fuzzers, we rely on Google's [libprotobuf-mutator][2] library.
Broadly speaking, writing a semantic fuzzer involves the following steps:

- Write a (context-free) grammar for Solidity in the protobuf interface definition language.
- Implement a converter interface that accepts a generation of the protobuf grammar and converts into target language.

We have implemented one such semantic fuzzer for testing the correctness of the Yul optimiser.
The fuzzer randomly generates Yul programs whose behavior is tracked pre and post optimisation in order to flag stateful divergence.
This helps us determine if a bug was introduced into the optimiser.

#### Example bug found by back-end fuzzer

The redundant assignment eliminator is a Yul optimiser step that (surprise!) removes redundant assignments to a variable.
The back-end fuzzer generated the following example that demonstrated an error in this step:

```
{
        for {let i:= 0} lt(i,2) {i := add(i,1)}
        {
                // x is declared and implicitly
                // initialized to zero.
                let x
                // This assignment is not redundant
                // since it is used by the mstore statement
                // after the if statement
                x := 1337
                if lt(i,1) {
                        // This assignment is redundant because of the `continue`
                        x := 42
                        continue
                }
                mstore(0, x)
        }
}
```

The redundant assignment eliminator eliminated all assignments to `x` leading to `mstore(0, x)`, thereby optimising the program to one containing `mstore(0, 0)` instead of `mstore(0, 1337)`.
This [bug][8] has been [fixed in `0.6.1`][9].

How does the fuzzer generate such programs?
The answer, in a nutshell, is the following. In each fuzzing iteration:

- Libprotobuf-mutator creates a generation of the protobuf grammar for Yul.
- Libprotobuf parses this generation to ensure it is a valid protobuf message.
- If valid, the protobuf message is accepted by the converter that we have written.
- The converter converts this protobuf message into a yul program.

If you are interested in taking a look at the protobuf grammar for Yul and the converter, please take a look [here][6] and [there][7].
Contributions for improving the grammar/converter are welcome as always.

### Work in Progress

Currently, we are working on a new Solidity program generator that is independent of libprotobuf and libprotobuf-mutator.
The main reason for this is that the protobuf IDL is hardly suited to capturing programming language semantics.
Moreover, it is quite laborious to write context-free grammar for high-level programming languages.

The end goal of the new fuzzer generator is to be able to automatically generate a well-formed Solidity program.
Once this is implemented, we plan to compile/optimise and potentially execute the resulting bytecode on the EVM virtual machine.
This will help us discover otherwise difficult-to-find bugs introduced by the compiler that show up only when EVM state is examined.

Watch this space for more updates on Solidity fuzzing!

[1]: https://github.com/google/oss-fuzz
[2]: https://github.com/google/libprotobuf-mutator
[3]: https://docs.soliditylang.org/en/develop/natspec-format.html
[4]: https://github.com/ethereum/solidity/issues/10433
[5]: https://www.github.com/ethereum/solidity/blob/develop/test/tools/ossfuzz/config/solidity.dict
[6]: https://www.github.com/ethereum/solidity/blob/develop/test/tools/ossfuzz/yulProto.proto
[7]: https://www.github.com/ethereum/solidity/blob/develop/test/tools/ossfuzz/protoToYul.cpp
[8]: https://github.com/ethereum/solidity/issues/8072
[9]: https://github.com/ethereum/solidity/pull/8082
