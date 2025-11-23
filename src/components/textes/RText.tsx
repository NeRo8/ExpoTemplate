import { Text, TextProps } from 'react-native';

import { useStyles, createStyleSheet } from 'react-native-unistyles';

interface RTextProps extends TextProps {}

export const CustomText = ({ children, ...props }: RTextProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.colors.paragraph,
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.regular,
    fontFamily: theme.fonts.regular,
  },
}));
