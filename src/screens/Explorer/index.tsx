import { ScrollView, View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Header } from './widgets/Header';

export const ExplorerScreen = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Header />

      <View style={styles.bodyContainerStyle}></View>
    </ScrollView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
  bodyContainerStyle: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.paddings.sm,
  },
}));
