import fs from 'fs'
import { GetStaticProps } from 'next/types'
import {
  Hero,
  PageMetadata,
} from '@/components'
import { BLOG_POSTS_DIR, PRODUCTS_TITLE, MAIN_CONTENT_ID } from '@/constants'
import { getPostsDataForPage, getTotalPages } from '@/utils'
import type { BlogProps } from '@/interfaces'
import { Box, Text } from '@chakra-ui/react'

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
          coming_soon
        </Text>

        
      </Hero>
    </Box>
  </>
)

export default Blog


//      <BlogPostListSection
//allPostsData={allPostsData}
//page={1}
//totalPages={totalPages}
///>