import { InformationList } from '@components/containers/InformationContainer';
import { ScrollContainer } from '@components/containers/ScrollContainer';

import { ABOUT_INFORMATION } from '@constants/textes';

export const AboutScreen = () => {
  return (
    <ScrollContainer>
      <InformationList data={ABOUT_INFORMATION} />
    </ScrollContainer>
  );
};
