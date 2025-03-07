import { Grid, type GridProps, Text, Divider } from '@chakra-ui/react'
import { Link } from '@/components'

export const ContributingCards: React.FC<GridProps> = (props) => {
  const getGridColumn = (i: number) => ({
    base: `1 / 2`,
    md: `${(i % 2) + 1} / ${(i % 2) + 2}`,
    lg: `${(i % 4) + 1} / ${(i % 4) + 2}`,
  })
  const getGridRow = (i: number, n: number) => ({
    base: 'auto',
    md: `${Math.floor(i / 2) * 3 + n}`,
    lg: `${Math.floor(i / 4) * 3 + n}`,
  })
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      columnGap={8}
      {...props}
    >
      <Text
        textStyle="h6-mono"
        color="secondary"
        gridColumn={getGridColumn(0)}
        gridRow={getGridRow(0, 1)}
        alignSelf="end"
      >
        Implementing 24/7 Databases
      </Text>
      <Divider
        borderColor="highlight"
        gridColumn={getGridColumn(0)}
        gridRow={getGridRow(0, 2)}
      />
      <Text
        gridColumn={getGridColumn(0)}
        gridRow={getGridRow(0, 3)}
        mt={4}
        mb={{ base: '12 !important', lg: '4 !important' }}
        sx={{
          '&:last-of-type': {
            mb: '0 !important',
          },
        }}
      >
        Data and APIs are our bread and butter. We won&apos;t stop until you and
        your customers have access to your business intelligence at your
        fingertips anytime, anywhere. Securely, of course.
      </Text>

      <Text
        textStyle="h6-mono"
        color="secondary"
        gridColumn={getGridColumn(1)}
        gridRow={getGridRow(1, 1)}
        alignSelf="end"
      >
        Establishing Cybersecurity
      </Text>
      <Divider
        borderColor="highlight"
        gridColumn={getGridColumn(1)}
        gridRow={getGridRow(1, 2)}
      />
      <Text
        gridColumn={getGridColumn(1)}
        gridRow={getGridRow(1, 3)}
        mt={4}
        mb={{ base: '12 !important', lg: '4 !important' }}
        sx={{
          '&:last-of-type': {
            mb: '0 !important',
          },
        }}
      >
        In this day and age, security is paramount. With a team well-versed in
        institutional-grade practices, we can help set up your business to be
        protected from cyberattacks, hackers, and any other risks your business
        faces.
      </Text>

      <Text
        textStyle="h6-mono"
        color="secondary"
        gridColumn={getGridColumn(2)}
        gridRow={getGridRow(2, 1)}
        alignSelf="end"
      >
        Onboarding Customers with AI
      </Text>
      <Divider
        borderColor="highlight"
        gridColumn={getGridColumn(2)}
        gridRow={getGridRow(2, 2)}
      />
      <Text
        gridColumn={getGridColumn(2)}
        gridRow={getGridRow(2, 3)}
        mt={4}
        mb={{ base: '12 !important', lg: '4 !important' }}
        sx={{
          '&:last-of-type': {
            mb: '0 !important',
          },
        }}
      >
        Artificial Intelligence is all the rage these days. But how can you and
        your business benefit from it? Oh boy, it&apos;s like having free, on
        call personal assistants. We can start by leveraging AI to assist with
        your customer experience while also making your internal processes more
        efficient. But that&apos;s just the beginning...
      </Text>

      <Text
        textStyle="h6-mono"
        color="secondary"
        gridColumn={getGridColumn(3)}
        gridRow={getGridRow(3, 1)}
        alignSelf="end"
      >
        Utilizing Crypto Technologies
      </Text>
      <Divider
        borderColor="highlight"
        gridColumn={getGridColumn(3)}
        gridRow={getGridRow(3, 2)}
      />
      <Text
        gridColumn={getGridColumn(3)}
        gridRow={getGridRow(3, 3)}
        mt={4}
        mb={{ base: '12 !important', lg: '4 !important' }}
        sx={{
          '&:last-of-type': {
            mb: '0 !important',
          },
        }}
      >
        We are first and foremost a crypto service provider. You name it,
        we&apos;ve got it. Maybe you want to start accepting Bitcoin, maybe you
        want to set up decentralized applications on Ethereum, or maybe you want
        to build out onchain programs on Solana. The sky&apos;s the limit, but
        we&apos;re shooting for the moon. Because even if we miss, we&apos;ll
        land among the stars.
      </Text>
    </Grid>
  )
}
