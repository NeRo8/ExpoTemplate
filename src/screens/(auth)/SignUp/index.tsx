import { View } from 'react-native';

import { Link } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomButton } from '@components/buttons/CustomButton';
import { ScrollContainer } from '@components/containers/ScrollContainer';
import { CustomInput } from '@components/inputs/CustomInput';
import { CustomText } from '@components/textes/CustomText';

export const SignUpScreen = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <ScrollContainer>
      <View style={styles.containerStyle}>
        <View style={styles.formContainerStyle}>
          <View style={styles.headerContainerStyle}>
            <CustomText type="h2" style={styles.titleStyle}>
              Sign Up
            </CustomText>
            <CustomText style={styles.subtitleStyle}>
              Create an account to get started.
            </CustomText>
          </View>
          <View style={styles.fieldsContainerStyle}>
            <View style={styles.fieldsContainerStyle}>
              <CustomInput placeholder="Email" />
              <CustomInput placeholder="Password" />
              <CustomInput placeholder="Confirm Password" />
            </View>
            <CustomButton title="Sign Up" onPress={() => {}} />
          </View>

          <CustomText type="body" style={styles.signUpTextStyle}>
            Already have an account?{' '}
            <Link href="/(auth)" style={styles.signUpLinkStyle}>
              Sign In
            </Link>
          </CustomText>
        </View>
      </View>
    </ScrollContainer>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainerStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    padding: theme.paddings.md,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    width: '90%',
    gap: theme.paddings.md,
  },
  fieldsContainerStyle: {
    gap: theme.paddings.md,
  },
  titleStyle: {
    fontWeight: theme.fontWeights.bold,
  },
  signUpTextStyle: {
    fontWeight: theme.fontWeights.regular,
    textAlign: 'center',
  },
  signUpLinkStyle: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
  },
  forgotPasswordLinkStyle: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
  headerContainerStyle: {
    gap: theme.paddings.sm,
  },
  subtitleStyle: {
    color: theme.colors.placeholder,
  },
}));
