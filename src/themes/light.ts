import { fonts } from '@constants/fonts';

const colors = {
  background: '#f2f2f2',
  paragraph: '#191f21',
  primary: '#ed1c24',
  secondary: '#d28c64',
  borders: '#d0d0d0',
  light: '#d3d3d3',
  caption: '#ffffff',
  label: '#57585b',
  outline: '#ffffff',
  inputBackground: '#ffffff',
  placeholder: '#6f7e83',
  white: '#ffffff',
} as const;

const margins = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 40,
  xxl: 48,
  xxxl: 64,
} as const;

const paddings = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 40,
  xxl: 48,
  xxxl: 64,
} as const;

const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;

const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  black: '800',
  extraBold: '900',
} as const;

export const lightTheme = {
  colors,
  margins,
  paddings,
  borderRadius,
  fonts,
  fontSizes,
  fontWeights,
} as const;
