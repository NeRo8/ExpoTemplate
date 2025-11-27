import { PropsWithChildren, useState } from 'react';

import { TouchableOpacity, View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

interface SectionProps extends PropsWithChildren {
  title: string;
  isVisible?: boolean;
}

export const Section = ({
  children,
  title,
  isVisible = false,
}: SectionProps) => {
  const { styles } = useStyles(stylesheet);
  const [isOpen, setIsOpen] = useState(isVisible);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerContainerStyle}>
        <CustomText type="h5" style={styles.labelStyle}>
          {title}
        </CustomText>
        <TouchableOpacity onPress={handleToggle}>
          <CustomText type="label" style={styles.activeTextStyle}>
            {isOpen ? 'Show less' : 'Show more'}
          </CustomText>
        </TouchableOpacity>
      </View>
      {isOpen && <View>{children}</View>}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    padding: theme.paddings.md,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    gap: theme.paddings.md,
  },
  labelStyle: {
    fontWeight: theme.fontWeights.bold,
  },
  activeTextStyle: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
  },
  headerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
