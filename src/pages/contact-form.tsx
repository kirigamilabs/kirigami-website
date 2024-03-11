import { Box, Flex, FlexProps, Text} from '@chakra-ui/react'
import { Hero, PageMetadata, Section } from '@/components'
import {
  MAIN_CONTENT_ID,
} from '@/constants'
import { FormEvent } from 'react'

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
async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const email = formData.get('email')
  const name = formData.get('name')

  const response = ''//await fetch('/api/auth/login', {
    //method: 'POST',
    //headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify({ email, name }),
  //})

  if (response) {
    //handle submission
    console.log(email)
    console.log(name)
  } else {
    // Handle errors
    console.log(email)
    console.log(name)
  }
}

export default function About() {
  return (
    <>
      <PageMetadata
        title="Contact"
        description="956"
      />
      <Box as="main" id={MAIN_CONTENT_ID}>
        <Hero
          header="Contact Form"
          cta={[
            { name: 'contact@kirigamilabs.com', href: 'mailto:contact@kirigamilabs.com' },
          ]}
        >
          We're sorry. We are currently not accepting any additional clients. 
          <br/>
          If you would like to be placed on a waitlist, please email us at 
          <br/>
        </Hero>
      </Box>
      <Section
        pb={[10, null, null, 12]}
        gap={8}
        alignItems="center"
        textAlign="center"
        position="relative"
      >
        <Box maxW="container.md" fontSize="med">
          Please provide your name, business, and any additional information that may help us get you started.
        </Box>
      </Section>
      
    </>
  )
}

//Please provide as much information as possible in the form below. We will follow up to any requests as soon as possible. 