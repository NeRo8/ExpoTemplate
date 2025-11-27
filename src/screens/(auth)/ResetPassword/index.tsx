import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomButton } from '@components/buttons/CustomButton';
import { ScrollContainer } from '@components/containers/ScrollContainer';
import { CustomInput } from '@components/inputs/CustomInput';
import { CustomText } from '@components/textes/CustomText';

export const ResetPasswordScreen = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <ScrollContainer>
      <View style={styles.containerStyle}>
        <View style={styles.formContainerStyle}>
          <View style={styles.headerContainerStyle}>
            <CustomText type="h2" style={styles.titleStyle}>
              Forget password?
            </CustomText>
            <CustomText style={styles.subtitleStyle}>
              Enter your email to reset your password.
            </CustomText>
          </View>
          <View style={styles.fieldsContainerStyle}>
            <CustomInput placeholder="Email" />

            <CustomButton title="Send Reset Link" onPress={() => {}} />
          </View>
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
  titleStyle: {
    fontWeight: theme.fontWeights.bold,
  },
  fieldsContainerStyle: {
    gap: theme.paddings.md,
  },
  headerContainerStyle: {
    gap: theme.paddings.sm,
  },
  subtitleStyle: {
    color: theme.colors.placeholder,
  },
}));
