import { extendTheme } from '@chakra-ui/react'
import { config, textStyles } from './foundations'
const overrides = {
  config,
  colors: {
    purple: {
      300: '#E0B8D1',
      500: '#C072A2',
      600: '#632C4E',
      900: '#994178',
    },
    blue: {
      200: '#F5FBEF',
      900: '#110C4E',
    },
    gray: {
      50: '#F5FBEF',
      200: '#EEECE2',
    },
  },
  components: {},
  fonts: {
    heading: "'Overpass', sans-serif",
    body: "'Overpass', sans-serif",
    mono: "'Overpass Mono', monospace",
  },
  fontSizes: {
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.375rem',
    '5xl': '2.75rem',
    '6xl': '3.25rem',
    '7xl': '4rem',
  },
  shadows: {},
  styles: {
    global: () => ({
      '*': {
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
        scrollMarginTop: '5rem',
        padding: 0,
        margin: 0,
      },
      body: {
        transition: 'background 200ms linear !important',
        bg: 'bg',
        color: 'text',
      },
      p: {
        lineHeight: '1.7',
        '&:not(:last-of-type)': { mb: '4' },
      },
    }),
  },
  textStyles,
  semanticTokens: {
    colors: {
      a: { _light: 'purple.900', _dark: 'gray.200' }, // text
      b: { _light: 'purple.600', _dark: 'blue.200' },
      c: { _light: 'purple.500', _dark: 'purple.300' },
      d: { _light: 'purple.300', _dark: 'purple.500' },
      e: { _light: 'blue.200', _dark: 'purple.600' },
      f: { _light: 'gray.200', _dark: 'purple.900' }, // background
      g: { _light: 'beige', _dark: 'black' }, // background
      mode: { _light: 'gray.50', _dark: 'blue.900' },

      text: 'a',
      secondary: 'b',
      primary: 'c',
      highlight: 'd',
      bg: 'f',

      border: 'a',
      header: 'c',
      error: { _light: 'red.500', _dark: 'red.300' },
    },
  },
}

export default extendTheme(overrides)
