import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/RText';

export const SplashScreenPage = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.pageStyle}>
      <CustomText>SplashScreen</CustomText>
    </View>
  );
};

const stylesheet = createStyleSheet({
  pageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
