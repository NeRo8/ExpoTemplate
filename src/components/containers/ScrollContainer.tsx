import { PropsWithChildren } from 'react';

import { ScrollView } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const ScrollContainer = ({ children }: PropsWithChildren) => {
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.screenContentContainerStyle}>
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
