import { InformationList } from '@components/containers/InformationContainer';
import { ScrollContainer } from '@components/containers/ScrollContainer';

import { OPERATORS_TRAINING_INFORMATION } from '@constants/textes';

export const OperatorsScreen = () => {
  return (
    <ScrollContainer>
      <InformationList data={OPERATORS_TRAINING_INFORMATION} />
    </ScrollContainer>
  );
};
