import { PropsWithChildren } from 'react';

import { StyleProp, ViewStyle } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface PageContainerProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const PageContainer = ({ children, style }: PageContainerProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={[styles.containerStyle, style]}>
      {children}
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    flex: 1,
    padding: theme.paddings.sm,
  },
}));
