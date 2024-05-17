import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import {
  ButtonLink,
  Hero,
  PageMetadata,
  PragmaWatermark,
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
        description="The Software Provider For Businesses and Individuals Who Leverage AI, Blockchain, Crypto, Data, and Much More"
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
              can dramatically improve their customers&apos; experiences and provide unparalleled service.
              Individuals, on the other hand, can learn to utilize these futuristic products
              in order to gain better control of their lives and take steps to make their dreams come true. 
              
              
              <br/>
              <br/>
              
              If you belive that you or your business are ready for this revolution, reach out to find out what Kirigami can do for you{' '}
              .
            </Text>
            <ButtonLink href="/products" variant="solid" mt={8}>
              Get started
            </ButtonLink>
          </ShowcaseContent>
          <ShowcaseVisual>
            <Triangles variant="evolving" />
          </ShowcaseVisual>
        </ShowcaseSection>

        {/* The Future is Now */}


        {/* Playground section */}

      </Box>
    </>
  )
}
