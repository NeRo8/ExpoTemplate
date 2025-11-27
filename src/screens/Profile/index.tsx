import { View } from 'react-native';

import { Link } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomButton } from '@components/buttons/CustomButton';
import { ScrollContainer } from '@components/containers/ScrollContainer';
import { CustomText } from '@components/textes/CustomText';

import { ProfileInformation } from './widgets/Profile';

export const ProfileScreen = () => {
  const { styles } = useStyles(stylesheet);

  const handlePressLogout = () => {};

  return (
    <ScrollContainer>
      <ProfileInformation />

      <View style={styles.informationContainerStyle}>
        <CustomText type="body" style={styles.titleTextStyle}>
          Have any questions?
        </CustomText>
        <CustomText type="body" style={styles.descriptionTextStyle}>
          We are here to help you. If you have any questions, please contact us.
        </CustomText>
        <Link href="/contact-us">
          <CustomText type="body" style={styles.activeTextStyle}>
            Contact us
          </CustomText>
        </Link>
      </View>
      <View style={styles.informationContainerStyle}>
        <CustomText type="body" style={styles.titleTextStyle}>
          Our services
        </CustomText>
        <CustomText type="body" style={styles.descriptionTextStyle}>
          We offer a wide range of services to help you.
        </CustomText>
        <Link href="/(services)">
          <CustomText type="body" style={styles.activeTextStyle}>
            View all
          </CustomText>
        </Link>
      </View>
      <View style={styles.informationContainerStyle}>
        <CustomText type="body" style={styles.titleTextStyle}>
          About us
        </CustomText>
        <CustomText type="body" style={styles.descriptionTextStyle}>
          We are a company that offers a wide range of services to help you.
        </CustomText>
        <Link href="/about-us">
          <CustomText type="body" style={styles.activeTextStyle}>
            Read more
          </CustomText>
        </Link>
      </View>

      <CustomButton title="Logout" onPress={handlePressLogout} />
    </ScrollContainer>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  informationContainerStyle: {
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
    backgroundColor: theme.colors.white,
  },
  titleTextStyle: {
    fontWeight: theme.fontWeights.bold,
  },
  descriptionTextStyle: {
    marginVertical: theme.margins.sm,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.placeholder,
  },
  activeTextStyle: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'right',
  },
}));
