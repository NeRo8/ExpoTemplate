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
