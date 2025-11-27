import { InformationList } from '@components/containers/InformationContainer';
import { ScrollContainer } from '@components/containers/ScrollContainer';

import { TRAINING_INFORMATION } from '@constants/temp/textes';

export const TrainingScreen = () => {
  return (
    <ScrollContainer>
      <InformationList data={TRAINING_INFORMATION} />
    </ScrollContainer>
  );
};
