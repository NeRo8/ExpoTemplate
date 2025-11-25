import { InformationList } from '@components/containers/InformationContainer';
import { ScrollContainer } from '@components/containers/ScrollContainer';

import { ABOUT_INFORMATION } from '@constants/textes';

import { ContactUsForm } from './widget/ContactUsForm';

export const AboutScreen = () => {
  return (
    <ScrollContainer>
      <ContactUsForm />

      <InformationList data={ABOUT_INFORMATION} />
    </ScrollContainer>
  );
};
