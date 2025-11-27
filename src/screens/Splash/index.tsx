import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { PageContainer } from '@components/containers/PageContainer';

import { icons } from '@constants/icons';

export const SplashScreen = () => {
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

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  logoStyle: {
    width: 200,
    height: 200,
  },
}));
