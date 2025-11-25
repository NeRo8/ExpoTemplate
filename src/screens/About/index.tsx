import { ScrollView } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { InformationItem } from '@components/items/InformationItem';

import { ABOUT_INFORMATION } from '@constants/about';

import { ContactUsForm } from './widget/ContactUsForm';

export const AboutScreen = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <ScrollView contentContainerStyle={styles.screenContentContainerStyle}>
      <ContactUsForm />

      {ABOUT_INFORMATION.map((item) => (
        <InformationItem key={item.id} title={item.title} text={item.text} />
      ))}
    </ScrollView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  screenContentContainerStyle: {
    flexGrow: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
    backgroundColor: theme.colors.background,
  },
}));
