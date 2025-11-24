import { Text, TextProps } from 'react-native';

import { useStyles, createStyleSheet } from 'react-native-unistyles';

type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'caption'
  | 'label';

interface RTextProps extends TextProps {
  type: TextType;
}

export const CustomText = ({ children, ...props }: RTextProps) => {
  const { styles } = useStyles(stylesheet, { type: props.type });
  return (
    <Text {...props} style={[styles.textStyle, props.style]}>
      {children}
    </Text>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  textStyle: {
    color: theme.colors.paragraph,
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.regular,
    fontFamily: theme.fonts.regular,
    variants: {
      type: {
        h1: {
          fontSize: theme.fontSizes.xxxl,
          fontWeight: theme.fontWeights.bold,
        },
        h2: {
          fontSize: theme.fontSizes.xxl,
        },
        h3: {
          fontSize: theme.fontSizes.xl,
        },
        h4: {
          fontSize: theme.fontSizes.lg,
        },
        h5: {
          fontSize: theme.fontSizes.md,
        },
        h6: {
          fontSize: theme.fontSizes.sm,
        },
        body: {
          fontSize: theme.fontSizes.md,
        },
        caption: {
          fontSize: theme.fontSizes.sm,
        },
        label: {
          fontSize: theme.fontSizes.xs,
        },
      },
    },
  },
}));
