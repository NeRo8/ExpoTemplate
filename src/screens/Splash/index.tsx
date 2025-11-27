import { useEffect } from 'react';

import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { PageContainer } from '@components/containers/PageContainer';

import { icons } from '@constants/icons';

export const SplashScreen = () => {
  const router = useRouter();

  const isAuthorized = false;

  useEffect(() => {
    const redirect = setTimeout(() => {
      const routeName = isAuthorized ? '/(main)' : '/(auth)';
      router.replace(routeName);
    }, 1000);
    return () => clearTimeout(redirect);
  }, [router, isAuthorized]);

  const { styles } = useStyles(stylesheet);

  return (
    <PageContainer style={styles.containerStyle}>
      <Image
        contentFit="contain"
        source={icons.logoWithLabel}
        style={styles.logoStyle}
      />
    </PageContainer>
  );
};

const stylesheet = createStyleSheet({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 200,
    height: 200,
  },
});
