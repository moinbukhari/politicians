import { base } from '@theme-ui/presets'
import { merge } from 'lodash'

export const breakpoints = [32, 48, 64, 72, 96].map(w => `${w}em`)

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const fontSizes = [12, 16, 20, 24, 32, 48, 64, 96, 128]

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  red: '#ec3750',
  orange: '#ff8c37',
  yellow: '#f1c40f',
  green: '#33d6a6',
  cyan: '#5bc0de',
  blue: '#338eda',
  twitter: '#1da1f2',
  facebook: '#3b5998',
  instagram: '#e1306c'
}

const theme = merge(base, {
  breakpoints,
  space,
  fontSizes,
  initialColorMode: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    ...palette,
    text: palette.black,
    background: palette.snow,
    elevated: palette.white,
    sunken: palette.smoke,
    border: palette.smoke,
    secondary: palette.slate,
    primary: palette.red,
    muted: palette.muted,
    accent: palette.blue,
    invertedPrimary: palette.white,
    invertedText: palette.red,
    nav: palette.white,
    dem: palette.blue,
    rep: palette.red,
    ind: palette.cyan,
    lib: palette.orange,
    gre: palette.green,
    modes: {
      dark: {
        text: palette.white,
        background: palette.dark,
        elevated: palette.darkless,
        sunken: palette.darker,
        border: palette.darkless,
        secondary: palette.muted,
        muted: palette.muted,
        accent: palette.cyan,
        invertedPrimary: palette.darker,
        invertedText: palette.red,
        nav: palette.red
      }
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  lineHeights: {
    title: 1,
    heading: 1.125,
    subheading: 1.25,
    body: 1.5
  },
  fontWeights: {
    stat: 300,
    body: 400,
    medium: 600,
    bold: 700,
    heading: 900
  },
  letterSpacings: {
    title: '-0.009em',
    headline: '0.009em'
  },
  sizes: {
    ultrawide: 1536,
    wide: 1200,
    subwide: 896,
    container: 768,
    subcontainer: 640,
    narrowplus: 576,
    narrow: 512
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    small: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)',
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    elevated: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)'
  },
  text: {
    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    title: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'title',
      letterSpacing: 'title',
      fontSize: [5, 6, 7, 8]
    },
    subtitle: {
      fontSize: [3, 4, null, 5],
      fontWeight: 'body',
      letterSpacing: 'headline',
      lineHeight: 'subheading',
      my: 0
    },
    headline: {
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 4,
      color: 'accent',
      mt: 3,
      mb: 3
    },
    subheadline: {
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
      letterSpacing: 'heading',
      fontSize: [1, 2],
      mt: 0,
      mb: 3
    },
    caption: {
      color: 'muted',
      fontWeight: 'medium',
      letterSpacing: 'headline'
    },
    logo: {
      textTransform: 'uppercase',
      letterSpacing: 'headline',
      fontWeight: 'heading'
    }
  },
  badges: {
    pill: {
      borderRadius: 'circle'
    }
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      cursor: 'pointer',
      fontFamily: 'body',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      svg: { ml: -1, mr: 2 }
    },
    inverted: {
      bg: 'invertedPrimary',
      color: 'invertedText',
      cursor: 'pointer',
      fontFamily: 'body',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      svg: { ml: -1, mr: 2 }
    }
  },
  images: {
    avatar: {
      borderRadius: 'circle',
      objectFit: 'cover',
      objectPosition: 'center',
      flexShrink: 0
    }
  },
  forms: {
    input: {
      bg: 'elevated',
      color: 'text',
      fontFamily: 'body',
      borderRadius: 'base',
      boxShadow: 'small',
      transition: 'box-shadow .125s ease-in-out',
      border: 0,
      ':hover,:focus': { boxShadow: 'card' },
      '::-webkit-input-placeholder': { color: 'muted' },
      '::-moz-placeholder': { color: 'muted' },
      ':-ms-input-placeholder': { color: 'muted' },
      '&[type="search"]::-webkit-search-decoration': { display: 'none' }
    },
    label: {
      color: 'text',
      fontWeight: 'medium'
    },
    hidden: {
      position: 'absolute',
      height: '1px',
      width: '1px',
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)',
      whiteSpace: 'nowrap'
    }
  },
  cards: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      input: { boxShadow: 'none !important' }
    },
    sunken: {
      bg: 'sunken',
      p: [3, 4],
      borderRadius: 'extra'
    },
    error: {
      bg: 'sunken',
      borderRadius: 'extra',
      p: [3, 4],
      color: 'text',
      fontWeight: 'bold',
      display: 'flex',
      placeContent: 'center'
    },
    nav: {
      bg: 'elevated',
      color: 'text',
      px: 3,
      py: 4,
      borderRadius: 'extra',
      boxShadow: 'card',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      fontSize: 2,
      fontWeight: 'bold',
      lineHeight: 'title',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)',
        boxShadow: 'elevated'
      },
      ':after': {
        content: '"→"',
        color: 'accent',
        fontWeight: 'title',
        ml: 'auto'
      },
      svg: {
        flexShrink: '0',
        mr: 3,
        mb: [3, 0]
      }
    }
  },
  layout: {
    container: {
      width: '100%',
      maxWidth: ['container', null, null, 'wide'],
      mx: 'auto',
      px: 3
    },
    wide: {
      width: '100%',
      maxWidth: ['wide', null, null, 'ultrawide'],
      mx: 'auto',
      px: 3
    }
  },
  styles: {
    hr: {
      borderColor: 'border',
      my: [3, 4]
    }
  }
})
theme.styles.root = {
  fontFamily: theme.fonts.body,
  lineHeight: theme.lineHeights.body,
  fontWeight: theme.fontWeights.body,
  color: theme.colors.text,
  margin: 0,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

export default theme
