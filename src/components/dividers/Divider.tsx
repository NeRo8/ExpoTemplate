import { StyleProp, View, ViewStyle } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

export interface DividerProps {
  dividerStyle?: StyleProp<ViewStyle>;
}

export const Divider = ({ dividerStyle }: DividerProps) => {
  const { styles } = useStyles(stylesheet);

  return <View style={[styles.dividerStyle, dividerStyle]} />;
};

const stylesheet = createStyleSheet((theme) => ({
  dividerStyle: {
    height: 1,
    backgroundColor: theme.colors.borders,
  },
  labelStyle: {},
}));
