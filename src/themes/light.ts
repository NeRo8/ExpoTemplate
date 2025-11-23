const colors = {
  background: '#ffffff',
  paragraph: '#191f21',
  primary: '#ed1c24',
  secondary: '#d28c64',
  borders: '#57585b',
  light: '#d3d3d3',
};

const margins = {
  sm: 8,
  md: 16,
  lg: 32,
  xl: 40,
  xxl: 48,
  xxxl: 64,
} as const;

const paddings = {
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

const fonts = {
  light: 'SourceCodePro-Light',
  regular: 'SourceCodePro-Regular',
  medium: 'SourceCodePro-Medium',
  semiBold: 'SourceCodePro-SemiBold',
  bold: 'SourceCodePro-Bold',
  black: 'SourceCodePro-Black',
  extraBold: 'SourceCodePro-ExtraBold',
};

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
