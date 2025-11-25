import { InformationList } from '@components/containers/InformationContainer';
import { ScrollContainer } from '@components/containers/ScrollContainer';

import { AFTER_SALES_AND_SPARE_PARTS_INFORMATION } from '@constants/textes';

export const AfterSalesScreen = () => {
  return (
    <ScrollContainer>
      <InformationList data={AFTER_SALES_AND_SPARE_PARTS_INFORMATION} />
    </ScrollContainer>
  );
};
