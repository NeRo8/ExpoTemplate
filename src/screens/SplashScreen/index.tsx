import { ScrollView } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomButton } from '@components/buttons/CustomButton';
import { Divider } from '@components/dividers/Divider';
import { CustomText } from '@components/textes/CustomText';

const noop = () => {};

export const SplashScreenPage = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.pageContentContainerStyle}>
      <Divider />
      <CustomText type="h1">SplashScreen</CustomText>
      <CustomText type="h2">SplashScreen</CustomText>
      <CustomText type="h3">SplashScreen</CustomText>
      <CustomText type="h4">SplashScreen</CustomText>
      <CustomText type="h5">SplashScreen</CustomText>
      <CustomText type="h6">SplashScreen</CustomText>
      <CustomText type="body">SplashScreen</CustomText>
      <CustomText type="caption">SplashScreen</CustomText>
      <CustomText type="label">SplashScreen</CustomText>

      <Divider />

      <CustomButton type="primary" onPress={noop} title="Primary Button" />
      <CustomButton type="outline" onPress={noop} title="Outline Button" />
    </ScrollView>
  );
};

const stylesheet = createStyleSheet({
  pageContentContainerStyle: {
    flexGrow: 1,
    padding: 24,
    gap: 16,
  },
});
