import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  type?: 'primary' | 'outline';
  buttonContainerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
}

export const CustomButton = ({
  onPress,
  title,
  buttonContainerStyle,
  buttonStyle,
  buttonTextStyle,
  type = 'primary',
}: CustomButtonProps) => {
  const { styles } = useStyles(stylesheet, { type });
  return (
    <View style={[styles.buttonContainerStyle, buttonContainerStyle]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonStyle, buttonStyle]}
      >
        <CustomText
          type="caption"
          style={[styles.buttonTextStyle, buttonTextStyle]}
        >
          {title}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  buttonContainerStyle: {},
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    padding: theme.paddings.md,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      type: {
        primary: {
          backgroundColor: theme.colors.primary,
        },
        outline: {
          backgroundColor: theme.colors.outline,
          borderWidth: 1,
          borderColor: theme.colors.primary,
        },
      },
    },
  },
  buttonTextStyle: {
    color: theme.colors.caption,
    fontWeight: theme.fontWeights.bold,
    variants: {
      type: {
        primary: {
          color: theme.colors.caption,
        },
        outline: {
          color: theme.colors.primary,
        },
      },
    },
  },
}));
