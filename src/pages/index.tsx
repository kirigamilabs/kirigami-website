import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import {
  ButtonLink,
  CompilerPlayground,
  ContributingCards,
  Hero,
  Link,
  PageMetadata,
  PragmaWatermark,
  Section,
  ShowcaseContent,
  ShowcaseSection,
  ShowcaseVisual,
  Triangles,
} from '@/components'
import {
  MAIN_CONTENT_ID,
} from '@/constants'

import type { BlogPostProps, EventPost } from '@/interfaces'

interface HomeProps {
  previewBlogPosts: BlogPostProps[]
  allEvents: EventPost[]
  versionNumber: string
}
export default function Home({}: HomeProps) {
  const sectionPaddingY = useBreakpointValue({ base: 12, md: 24 })
  
  //<button onClick={() => window.location.replace("#more")}><u>Find out more.</u></button>

  return (
    <>
      <PageMetadata
        title="Home"
        description="Solidity is a statically-typed curly-braces programming language designed for developing smart contracts that run on Ethereum."
      />
      <Box as="main" id={MAIN_CONTENT_ID}>
        {/* HERO */}
        <Hero
          header="Kirigami Labs"
          
        >
          The Software Provider For Businesses and Individuals Who Leverage 
          AI, Blockchain, Crypto, Data, and Much More{' '}
          <PragmaWatermark />
        </Hero>

        {/* Solidity is evolving rapidly > Get started */}
        <ShowcaseSection py={sectionPaddingY}>
          <ShowcaseContent
            title="Kirigami is growing rapidly"
            px={{ base: 4, md: 0 }}
            
          >
            <Text>
              Established in 2020, Kirigami was founded on the premise that AI and Crypto are the Future. 

              We aim to provide any and all businesses and indivduals, no matter their level of expertise, with
              the ability to leverage these revolutionary techonlogies. 
              <br/>
              <br/>
              
              By integrating with efficient data systems and secure technology, businesses
              can dramatically improve their customers' experiences and provide unparalleled service.
              Individuals, on the other hand, can learn to utilize these futuristic products
              in order to gain better control of their lives and take steps to make their dreams come true. 
              
              
              <br/>
              <br/>
              
              If you belive that you or your business are ready for this revolution, reach out to find out what Kirigami can do for you{' '}
              .
            </Text>
            <ButtonLink href="/contact" variant="solid" mt={8}>
              Get started
            </ButtonLink>
          </ShowcaseContent>
          <ShowcaseVisual>
            <Triangles variant="evolving" />
          </ShowcaseVisual>
        </ShowcaseSection>

        {/* The Future is Now */}
        <Section py={sectionPaddingY} gap={12}>
          <ShowcaseSection startWithVisual px={0}>
            <ShowcaseContent title="The Future is Now" id="more">
              <Text>
                Kirigami is testing the boundaries of what's possible in today's world.
                Check out these ways that we can help you and your business take a leap forward into the world of tomorrow.
              </Text>
            </ShowcaseContent>
            <ShowcaseVisual>
              <Triangles variant="triforce" />
            </ShowcaseVisual>
          </ShowcaseSection>

          <ContributingCards />

          <Flex justify="center">
            <ButtonLink href={'/use-cases'} variant="solid">
              Check out our Use Cases
            </ButtonLink>
          </Flex>
        </Section>


        {/* Playground section */}
        <Section py={sectionPaddingY} gap={12}>
          <ShowcaseSection startWithVisual>
            <ShowcaseContent title="The AI x Crypto Revolution">
              <Text>
                Try some of our products for yourself in this simple playground. To learn more, feel free to contact us for a demo or follow along as we divulge our learnings on our {' '}
                <Link href="https://kirigami.substack.com">Substack</Link>.
              </Text>
            </ShowcaseContent>
            <ShowcaseVisual>
              <Triangles variant="double" />
            </ShowcaseVisual>
          </ShowcaseSection>

          {/* Interactive Solidity code editor and compiler */}
          <CompilerPlayground />
        </Section>
      </Box>
    </>
  )
}
