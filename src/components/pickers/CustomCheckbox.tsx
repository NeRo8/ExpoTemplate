import { View } from 'react-native';

import { Checkbox, CheckboxProps } from 'expo-checkbox';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

interface CustomCheckboxProps extends CheckboxProps {
  label?: string;
}

export const CustomCheckbox = (props: CustomCheckboxProps) => {
  const { theme, styles } = useStyles(stylesheet);

  return (
    <View style={styles.checkboxContainerStyle}>
      <Checkbox
        {...props}
        color={props.value ? theme.colors.primary : theme.colors.borders}
      />
      {props.label && <CustomText type="caption">{props.label}</CustomText>}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  checkboxContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.paddings.sm,
  },
}));
