import { tint, opacify, transparentize, rgba, invert, shade  } from "polished"

const accent = '#333333'

const red = '#ba2222'
const blue = '#224bb3'
const green = '#3ca35d'

const sizes = {
  xxs: '320px',
  xs: '375px',
  sm: '425px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  xxl: '2560px',
};

export const devices = {
  // min width sizes, so styles inside query above size "X" will be true
  'xxs<': `(min-width: ${sizes.xxs})`,
  'xs<': `(min-width: ${sizes.xs})`,
  'sm<': `(min-width: ${sizes.sm})`,
  'md<': `(min-width: ${sizes.md})`,
  'lg<': `(min-width: ${sizes.lg})`,
  'xl<': `(min-width: ${sizes.xl})`,
  'xxl<': `(min-width: ${sizes.xxl})`,
  // max width sizes, so styles inside query below size "X" will be true
  '>xxs': `(max-width: ${sizes.xxs})`,
  '>xs': `(max-width: ${sizes.xs})`,
  '>sm': `(max-width: ${sizes.sm})`,
  '>md': `(max-width: ${sizes.md})`,
  '>lg': `(max-width: ${sizes.lg})`,
  '>xl': `(max-width: ${sizes.xl})`,
  '>xxl': `(max-width: ${sizes.xxl})`,
};

const theme = {
  fontSize: {
    xs: '1rem',
    sm: '1.2rem',
    default: '1.4rem',
    lg: '1.6rem',
    xl: '2rem',
    xxl: '2rem',
    xxxl: '3rem',
  },
  fontWeight: {
    light: 300,
    default: 400,
    medium: 500,
    bold: 600,
    extrabold: 700,
  },
  borderRadius: {
    none: '0',
    xs: '0.2rem',
    sm: '0.4rem',
    default: '0.6rem',
    lg: '0.8rem',
    xl: '1rem',
  },
  spacing: {
    0: '0',
    2.5: '0.25rem',
    5: '0.5rem',
    7.5: '0.75rem',
    10: '1rem',
    15: '1.5rem',
    20: '2rem',
    30: '3rem',
    40: '4rem',
  },
  fontFamily: {
    'sans-serif': `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  colors: {
    green900: green,
    green800: tint(0.1, green),
    green700: tint(0.2, green),
    green600: tint(0.3, green),
    green500: tint(0.4, green),
    green400: tint(0.5, green),
    green300: tint(0.6, green),
    green200: tint(0.7, green),
    green100: tint(0.8, green),

    blue900: blue,
    blue800: tint(0.1, blue),
    blue700: tint(0.2, blue),
    blue600: tint(0.3, blue),
    blue500: tint(0.4, blue),
    blue400: tint(0.5, blue),
    blue300: tint(0.6, blue),
    blue200: tint(0.7, blue),
    blue100: tint(0.8, blue),

    red900: red,
    red800: tint(0.1, red),
    red700: tint(0.2, red),
    red600: tint(0.3, red),
    red500: tint(0.4, red),
    red400: tint(0.5, red),
    red300: tint(0.6, red),
    red200: tint(0.7, red),
    red100: tint(0.8, red),

    background900: '#0E0E0E',
    background800: tint(0.02, '#0E0E0E'),
    background700: tint(0.04, '#0E0E0E'),
    background600: tint(0.06, '#0E0E0E'),
    background500: tint(0.08, '#0E0E0E'),
    background400: tint(0.1, '#0E0E0E'),
    background300: tint(0.12, '#0E0E0E'),
    background200: tint(0.14, '#0E0E0E'),
    background100: tint(0.16, '#0E0E0E'),

    foreground900: '#FFFFFF',
    foreground800: shade(0.02, '#FFFFFF'),
    foreground700: shade(0.04, '#FFFFFF'),
    foreground600: shade(0.06, '#FFFFFF'),
    foreground500: shade(0.08, '#FFFFFF'),
    foreground400: shade(0.1, '#FFFFFF'),
    foreground300: shade(0.12, '#FFFFFF'),
    foreground200: shade(0.14, '#FFFFFF'),
    foreground100: shade(0.16, '#FFFFFF'),
  },
  animation: {
    default: `cubic-bezier(0.19, 1, 0.22, 1)`,
  }
}

export { theme }
