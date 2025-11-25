import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const ProductItem = () => {
  const { styles } = useStyles(stylesheet);
  return <View style={styles.containerStyle}></View>;
};

const stylesheet = createStyleSheet({
  containerStyle: {},
});
