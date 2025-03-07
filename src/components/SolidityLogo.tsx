import { createIcon } from '@chakra-ui/react'

const paths = [
  {
    opacity: 0.23,
    d: 'M50 44.3091L75 1.00781L25 1.00781L0 44.3091H50Z',
  },
  {
    opacity: 1,
    d: 'M75 1.00781L25 1.00781L50 44.3091H100L75 1.00781Z',
  },

  {
    opacity: 1,
    d: 'M50 115.691L25 158.993H75L100 115.691L50 115.691Z',
  },
  {
    opacity: 0.23,
    d: 'M25 158.993H75L50 115.691L0 115.691L25 158.993Z',
  },
]

const [WIDTH, HEIGHT] = [100, 160]
export const SolidityLogo = createIcon({
  displayName: 'Solidity Logo',
  viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
  defaultProps: {
    width: `${WIDTH}px`,
    height: `${HEIGHT}px`,
    fill: 'currentColor',
  },
  path: paths.map((path) => <path key={path.d} {...path} />),
})
