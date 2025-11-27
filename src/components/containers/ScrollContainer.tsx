import { PropsWithChildren } from 'react';

import { ScrollView } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const ScrollContainer = ({ children }: PropsWithChildren) => {
  const { styles } = useStyles(stylesheet);

  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.screenContentContainerStyle,
        { paddingBottom: bottom },
      ]}
    >
      {children}
    </ScrollView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  screenContentContainerStyle: {
    flexGrow: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
    backgroundColor: theme.colors.background,
  },
}));
