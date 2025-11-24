import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/RText';

export const SplashScreenPage = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.pageStyle}>
      <CustomText type="h1">SplashScreen</CustomText>
      <CustomText type="h2">SplashScreen</CustomText>
      <CustomText type="h3">SplashScreen</CustomText>
      <CustomText type="h4">SplashScreen</CustomText>
      <CustomText type="h5">SplashScreen</CustomText>
      <CustomText type="h6">SplashScreen</CustomText>
      <CustomText type="body">SplashScreen</CustomText>
      <CustomText type="caption">SplashScreen</CustomText>
      <CustomText type="label">SplashScreen</CustomText>
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
