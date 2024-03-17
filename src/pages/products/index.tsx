import fs from 'fs'
import { GetStaticProps } from 'next/types'
import {
  ButtonLink,
  CompilerPlayground,
  ContributingCards,
  Hero,
  Link,
  PageMetadata,
  Section,
  ShowcaseContent,
  ShowcaseSection,
  ShowcaseVisual,
  Triangles,
} from '@/components'
import { BLOG_POSTS_DIR, PRODUCTS_TITLE, MAIN_CONTENT_ID } from '@/constants'
import { getPostsDataForPage, getTotalPages } from '@/utils'
import type { BlogProps } from '@/interfaces'
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'

export const getStaticProps: GetStaticProps = async () => {
  // get list of all files from our posts directory
  const files = fs.readdirSync(BLOG_POSTS_DIR)
  const totalPages = getTotalPages(files)
  const sortedFiles = files.sort().reverse()
  const allPostsData = getPostsDataForPage(sortedFiles, 1, fs)
  return { props: { allPostsData, totalPages } }
}



const Blog: React.FC<BlogProps> = ({ allPostsData, totalPages }) => (
  <>
    <PageMetadata
      title="Products"
      description="Kirigami Products: latest news & announcements"
    />
    <Box as="main" id={MAIN_CONTENT_ID}>
      <Hero header={PRODUCTS_TITLE}>
        
        <Text
          position="relative"
          w="fit-content"
          whiteSpace="normal"
          _after={{
            content: '"_"',
            display: 'inline-block',
            width: 0,
            overflowX: 'visible',
            color: 'beige',
            sx: {
              '@keyframes blink-cursor': {
                'from, to': { opacity: 0 },
                '50%': { opacity: 1 },
              },
            },
            animation: 'blink-cursor 1.25s step-end infinite',
          }}
        >
          Examples on how we can help you and your business below
        </Text>

        
      </Hero>
    </Box>
    {/* The Future is Now */}
    <Section py={useBreakpointValue({ base: 12, md: 24 })} gap={12}>
          <ShowcaseSection startWithVisual px={0}>
            <ShowcaseContent title="The Future is Now" id="more">
              <Text>
                Kirigami is testing the boundaries of what&apos;s possible in today&apos;s world.
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
        <Section py={useBreakpointValue({ base: 12, md: 24 })} gap={12}>
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
  </>
)

export default Blog


//      <BlogPostListSection
//allPostsData={allPostsData}
//page={1}
//totalPages={totalPages}
///>