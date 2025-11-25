import { ScrollView } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const ProductsScreen = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
    ></ScrollView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
  },
}));
