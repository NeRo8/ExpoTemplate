import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const SplashScreenPage = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.containerStyle}>
      <Image
        contentFit="contain"
        source={require('@assets/icons/logo.svg')}
        style={styles.logoStyle}
      />
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 200,
    height: 200,
  },
});
