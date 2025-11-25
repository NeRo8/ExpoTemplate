import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface CustomInputProps extends TextInputProps {
  inputStyle?: StyleProp<TextStyle>;
}

export const CustomInput = (props: CustomInputProps) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={styles.containerStyle}>
      <View style={styles.inputContainerStyle}>
        <TextInput
          {...props}
          placeholderTextColor={theme.colors.placeholder}
          cursorColor={theme.colors.primary}
          selectionColor={theme.colors.primary}
          style={[styles.inputStyle, props.inputStyle]}
        />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {},
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: theme.paddings.sm,
    backgroundColor: theme.colors.inputBackground,
  },
  inputStyle: {
    minHeight: 40,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.sm,
  },
}));
