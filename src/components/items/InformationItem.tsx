import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

interface InformationItemProps {
  title: string;
  text: string;
}

export const InformationItem = ({ title, text }: InformationItemProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.informationContainerStyle}>
      <CustomText style={styles.informationTitleStyle}>{title}</CustomText>
      <CustomText style={styles.informationTextStyle}>{text}</CustomText>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  informationContainerStyle: {
    gap: theme.margins.md,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
    backgroundColor: theme.colors.white,
  },
  informationTitleStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary,
  },
  informationTextStyle: {
    fontSize: theme.fontSizes.xs,
  },
}));
