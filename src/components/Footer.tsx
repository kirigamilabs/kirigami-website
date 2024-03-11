import { Flex, Text } from '@chakra-ui/react'

export const Footer: React.FC = () => (
  <Flex
    as="footer"
    direction="column"
    alignItems={{ base: 'start', md: 'center' }}
    pb={24}
    pt={12}
    px={{ base: 4, md: 8 }}
    gap={10}
  >
    <Flex fontSize="lg" textAlign="center" flexWrap="wrap" columnGap={4}>
      <Text>•</Text>
      <Text>2024 Kirigami Labs</Text>
      <Text>•</Text>
    </Flex>
  </Flex>
)
