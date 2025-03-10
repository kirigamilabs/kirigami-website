import {
  Box,
  chakra,
  Flex,
  shouldForwardProp,
  useBreakpointValue,
  Spacer,
  Image,
} from '@chakra-ui/react'
import { ColorModeToggle, Link, MobileMenu, SolidityLogo } from '@/components'
import { NAV_LINKS, NAV_HEIGHT, EVENT_PAGE_DYNAMIC_ROUTE } from '@/constants'
import {
  motion,
  useScroll,
  useTransform,
  isValidMotionProp,
} from 'framer-motion'
import { useRouter } from 'next/router'

const NAV_PADDING = 2 * 16
const Y_OFFSET = 64
const STARTING_LOGO_HEIGHT = 176
const ENDING_LOGO_HEIGHT = 40
const STARTING_NAV_HEIGHT = STARTING_LOGO_HEIGHT + NAV_PADDING + Y_OFFSET
const FINAL_SCROLL_DISTANCE =
  STARTING_LOGO_HEIGHT - ENDING_LOGO_HEIGHT + Y_OFFSET

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const Header: React.FC = () => {
  const { pathname } = useRouter()
  const skipAnimation = pathname.includes(EVENT_PAGE_DYNAMIC_ROUTE)
  const { scrollY } = useScroll()

  const endOpacity = 0.95
  const mobileOpacity = useTransform(scrollY, [0, 16], [0, endOpacity])
  const endY = 0
  const endScale = 0.25

  const desktopOpacity = useTransform(
    scrollY,
    [STARTING_NAV_HEIGHT - 50, STARTING_NAV_HEIGHT],
    [0, endOpacity]
  )
  const desktopY = useTransform(scrollY, [0, Y_OFFSET], [Y_OFFSET, endY])
  const desktopScale = useTransform(
    scrollY,
    [NAV_PADDING, FINAL_SCROLL_DISTANCE],
    [1.1, endScale]
  )

  const opacity = useBreakpointValue({
    base: mobileOpacity,
    md: skipAnimation ? mobileOpacity : desktopOpacity,
  })
  const y = useBreakpointValue({
    base: endY,
    md: skipAnimation ? endY : desktopY,
  })
  const scale = useBreakpointValue({
    base: endScale,
    md: skipAnimation ? endScale : desktopScale,
  })

  const imageSrc = '/assets/kirigami-app-icon-192.png'
  const altimageSrc = '/assets/logo.svg'

  return (
    <>
      <MotionDiv
        position="fixed"
        top={0}
        insetInline={0}
        h={`${NAV_HEIGHT}px`}
        bg="bg"
        zIndex="sticky"
        transition="background 200ms linear !important"
        boxShadow="md"
        style={{ opacity }}
      />

      <Flex
        position="sticky"
        zIndex="sticky"
        justifyContent="right"
        top={0}
        px={{ base: 4, md: 8 }}
        py={4}
        bg="transparent"
        backdropFilter="blur(1px)"
        alignItems="right"
      >
        {/* Soidity Logo: Positioned absolutely */}
        <MotionDiv
          display="flex"
          position="absolute"
          top={4}
          insetStart={{ base: 5, md: 8 }}
          alignItems="end"
          style={{ scale, y }}
          transformOrigin="top left"
        >
          <Link href="/" aria-label="Go home" display="block">
            <Image src={imageSrc} alt={altimageSrc} />
          </Link>
        </MotionDiv>
        <Spacer />
        {/* Nav bar / mobile menu with color mode toggle */}
        <Flex
          as="nav"
          display={['none', null, 'flex']}
          h="fit-content"
          alignItems="right"
          justifyContent="right"
        >
          {NAV_LINKS.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              px={2}
              py={1}
              fontFamily="mono"
              letterSpacing="-0.02em"
              textDecoration="none"
              background={pathname.includes(href) ? 'mode' : 'none'}
              boxSizing="content-box"
              borderBottom="1px"
              borderColor="transparent"
              fontSize="sm"
              _hover={{
                color: 'primary',
                borderColor: 'primary',
              }}
            >
              {name}
            </Link>
          ))}
          <ColorModeToggle />
        </Flex>
        {/* Toggle light/dark */}
        <MobileMenu display={['flex', null, 'none']} />
      </Flex>
    </>
  )
}
