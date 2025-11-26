import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

export const ProfileInformation = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.containerStyle}>
      <View style={styles.profileAvatarStyle}>
        <CustomText style={styles.profileAvatarTextStyle}>JD</CustomText>
      </View>
      <View style={styles.profileInformationContainerStyle}>
        <CustomText type="h5" style={styles.profileNameStyle}>
          John Doe
        </CustomText>
        <View style={styles.row}>
          <CustomText type="label" style={styles.labelStyle}>
            Email:
          </CustomText>
          <CustomText type="label">john.doe@example.com</CustomText>
        </View>
        <View style={styles.row}>
          <CustomText type="label" style={styles.labelStyle}>
            Phone:
          </CustomText>
          <CustomText type="label">+1234567890</CustomText>
        </View>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    flexDirection: 'row',
    gap: theme.paddings.md,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
  },
  row: { flexDirection: 'row', gap: theme.paddings.xs },
  profileAvatarStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInformationContainerStyle: {
    gap: theme.margins.xs,
  },
  profileNameStyle: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: theme.margins.sm,
  },
  labelStyle: {
    fontWeight: theme.fontWeights.bold,
  },
  profileAvatarTextStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xxxl,
    color: theme.colors.primary,
  },
}));
