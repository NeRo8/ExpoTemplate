import { InformationList } from '@components/containers/InformationContainer';
import { ScrollContainer } from '@components/containers/ScrollContainer';

import { ABOUT_INFORMATION } from '@constants/textes';

export const AboutUsScreen = () => {
  return (
    <ScrollContainer>
      <InformationList data={ABOUT_INFORMATION} />
    </ScrollContainer>
  );
};
