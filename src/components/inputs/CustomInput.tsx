import { useState } from 'react';

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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.containerStyle}>
      <View
        style={[
          styles.inputContainerStyle,
          isFocused && styles.focusedInputContainerStyle,
        ]}
      >
        <TextInput
          {...props}
          placeholderTextColor={theme.colors.placeholder}
          cursorColor={theme.colors.primary}
          selectionColor={theme.colors.primary}
          style={[styles.inputStyle, props.inputStyle]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
  focusedInputContainerStyle: {
    borderColor: theme.colors.primary,
  },
  inputStyle: {
    minHeight: 40,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.sm,
  },
}));
