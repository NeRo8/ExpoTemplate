import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

interface InformationItemProps {
  title: string;
  text: string;
}

export const InformationItem = ({ title, text }: InformationItemProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <CustomText style={styles.titleStyle}>
      {title}:<CustomText style={styles.textStyle}>{text}</CustomText>
    </CustomText>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    flexDirection: 'row',
    gap: theme.paddings.xs,
  },
  titleStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xs,
  },
  textStyle: {
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.xs,
  },
}));
