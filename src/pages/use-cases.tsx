import { Box, Text } from '@chakra-ui/react'
import { Hero, Link, UseCaseCard, PageMetadata, Section } from '@/components'
import { MAIN_CONTENT_ID, USE_CASES } from '@/constants'

export default function UseCases() {
  return (
    <>
      <PageMetadata
        title="Use cases"
        description="Learn how Kirigami can solve your business problems."
      />
      <Box as="main" id={MAIN_CONTENT_ID}>
        <Hero header="Use Cases">
          Kirigami sells professional-grade AI x Crypto technology for you and
          your business allowing you to benefit from:
          <br />
          <br /> &oplus; best-in-class tech
          <br /> &oplus; better compliance
          <br /> &oplus; enhanced liquidity
          <br /> &oplus; simplified processes
          <br /> &oplus; improved economics
          <br /> &oplus; increased efficiencies
          <br /> &oplus; comprehensive security
          <br />
          <br />
          ...leading to true innovation!
          <br />
          <br />
          <br />
          Below are some popular use cases:
        </Hero>
        <Section
          direction="column"
          maxW="container.md"
          mx="auto"
          gap={24}
          py={20}
        >
          {USE_CASES.map((useCase, index) => (
            <UseCaseCard useCase={useCase} key={useCase.title} index={index} />
          ))}
        </Section>
        <Section gap={4} mb={12} maxW="container.lg" mx="auto">
          <Text textStyle="h3" color="text">
            ... and much more
          </Text>
          <Text>
            <br />
            <br />
            If you want to get started building you and your business&apos;
            future, head on over to our{' '}
            <Link href="/contact">Contact page</Link> and reach out to find out
            more!
          </Text>
        </Section>
      </Box>
    </>
  )
}
