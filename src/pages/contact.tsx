import { Box, Flex, FlexProps, Text } from '@chakra-ui/react'
import { Hero, Link, PageMetadata, Section } from '@/components'
import {
  MAIN_CONTENT_ID,
} from '@/constants'

interface FaqItemProps extends FlexProps {
  question: string
}
const FaqItem: React.FC<FaqItemProps> = ({
  question,
  children,
  ...flexProps
}) => (
  <Flex direction={{ base: 'column', md: 'row' }} py={6} gap={6} {...flexProps}>
    <Text flex={1} textStyle="h6-mono" color="text">
      {question}
    </Text>
    <Text flex={2}>{children}</Text>
  </Flex>
)
export default function About() {
  return (
    <>
      <PageMetadata
        title="Contact"
        description="LFG"
      />
      <Box as="main" id={MAIN_CONTENT_ID}>
        <Hero
          header="Contact Us"
          cta={[
            { name: 'Contact Form', href: '/contact-form' },
          ]}
        >
          Each of our products are custom tailored to your specific needs and requirements. 
          In order to best serve you, we will need you to provide information on you and your business. 
          <br/><br/>
        </Hero>
      </Box>
    </>
  )
}
