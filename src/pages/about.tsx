import { Box, Flex, FlexProps, Text } from '@chakra-ui/react'
import { Hero, PageMetadata, Section } from '@/components'
import { MAIN_CONTENT_ID } from '@/constants'

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
        title="About"
        description="Kirigami is a new age solutions provider founded on the premise that AI x Crypto are the Future."
      />
      <Box as="main" id={MAIN_CONTENT_ID}>
        <Hero header="About Us">
          <br />
          Kirigami is a new age solutions provider founded on the premise that
          AI x Crypto are the Future.
        </Hero>
        <Section
          as="article"
          direction="column"
          gap={4}
          maxW="container.md"
          py={24}
          mx="auto"
          bgImg="url(/assets/about-bg.svg)"
          bgRepeat="no-repeat"
          bgPosition="top center"
        >
          <Text>
            <b>Kirigami</b> , founded in 2020, is a pioneering organization
            focused on the integration of AI and Crypto into society. The
            impetus behind its creation stemmed from the disparate impact of the
            pandemic, which laid bare the systemic inefficiencies and
            disparities within our society.{' '}
          </Text>
          <Text>
            Like the Japanese art of cutting paper that Kirigami credits its
            name to, our mission is to cut through the layers of society that
            limit the potential in everything around us. Kirigami seeks to
            empower individuals and businesses, regardless of their level of
            expertise, to harness the transformative potential of AI and Crypto.
          </Text>
          <Text>
            In a world where the powerful few wield capital and technology for
            their own gain, Kirigami envisions a future where these
            revolutionary technologies serve the collective good, fostering
            innovation, equality, and societal progress.
          </Text>
          <Text>
            Kirigami has grown through the years by focusing on providing the
            very best of what technology can offer. In the spirit of God, we
            strive to make all of our partnerships as harmonious as possible,
            integrating with the upmost care and importance. We believe that if
            you succeed, we all succeed and for that reason, we will always
            treat your business as if it were our very own.
          </Text>
          <Text>Our pledge is to do the very best for all.</Text>
        </Section>
      </Box>
    </>
  )
}

//Amen.
