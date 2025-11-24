import { useEffect } from 'react';

import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { PageContainer } from '@components/containers';

import { icons } from '@constants/icons';

export const SplashScreenPage = () => {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.replace('/(main)');
    }, 1000);
    return () => clearTimeout(redirect);
  }, [router]);

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
