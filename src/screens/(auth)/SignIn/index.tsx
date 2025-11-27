import { View } from 'react-native';

import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomButton } from '@components/buttons/CustomButton';
import { ScrollContainer } from '@components/containers/ScrollContainer';
import { CustomInput } from '@components/inputs/CustomInput';
import { CustomText } from '@components/textes/CustomText';

export const SignInScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { bottom } = useSafeAreaInsets();
  return (
    <ScrollContainer>
      <View style={styles.containerStyle}>
        <View style={styles.formContainerStyle}>
          <View style={styles.headerContainerStyle}>
            <CustomText type="h2" style={styles.titleStyle}>
              Sign In
            </CustomText>
            <CustomText style={styles.subtitleStyle}>
              Welcome back to your account.
            </CustomText>
          </View>
          <View style={styles.fieldsContainerStyle}>
            <View style={styles.fieldsContainerStyle}>
              <CustomInput placeholder="Email" />
              <CustomInput placeholder="Password" />
            </View>
            <CustomButton title="Sign In" onPress={() => {}} />
            <Link href="/reset-password" style={styles.forgotPasswordLinkStyle}>
              Forgot Password?
            </Link>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: bottom }}>
        <CustomText type="body" style={styles.signUpTextStyle}>
          Don&apos;t have an account?{' '}
          <Link replace href="/sign-up" style={styles.signUpLinkStyle}>
            Sign Up
          </Link>
        </CustomText>
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
