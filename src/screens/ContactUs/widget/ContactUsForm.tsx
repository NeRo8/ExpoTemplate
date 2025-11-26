import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomButton } from '@components/buttons/CustomButton';
import { CustomInput } from '@components/inputs/CustomInput';
import { CustomText } from '@components/textes/CustomText';

export const ContactUsForm = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.containerStyle}>
      <View>
        <CustomText type="h2" style={styles.titleStyle}>
          Contact.
        </CustomText>
        <CustomText type="h2" style={styles.titleStyle}>
          Get in touch
        </CustomText>
      </View>
      <CustomText type="h5" style={styles.subtitleStyle}>
        Leave us a Message
      </CustomText>

      <View style={styles.inputsContainerStyle}>
        <CustomInput placeholder="Company Name" />
        <CustomInput placeholder="Name" />
        <CustomInput placeholder="Phone number" />
        <CustomInput placeholder="Email" />
        <CustomInput
          placeholder="Message"
          multiline
          numberOfLines={10}
          inputStyle={styles.messageInputStyle}
        />
        <CustomButton title="Send" onPress={() => {}} />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    gap: theme.paddings.md,
    backgroundColor: theme.colors.white,
    padding: theme.paddings.md,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.borders,
  },
  titleStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xxl,
    textTransform: 'uppercase',
  },
  subtitleStyle: {
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.placeholder,
  },
  messageInputStyle: {
    minHeight: 40,
    height: 100,
  },
  inputsContainerStyle: {
    gap: theme.paddings.md,
  },
}));
