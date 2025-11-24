import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface SearchInputProps extends TextInputProps {
  inputContainerStyle?: StyleProp<ViewStyle>;
}

export const SearchInput = (props: SearchInputProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={[styles.inputContainerStyle, props.inputContainerStyle]}>
      <Ionicons name="search" size={24} color={theme.colors.placeholder} />
      <TextInput
        autoFocus={false}
        placeholder="Browse Products ..."
        placeholderTextColor={theme.colors.placeholder}
        style={styles.inputStyle}
        {...props}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: theme.paddings.md,
    gap: theme.paddings.md,
    backgroundColor: theme.colors.inputBackground,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.lg,
  },
  inputStyle: {
    flex: 1,
    height: 40,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.sm,
  },
}));
