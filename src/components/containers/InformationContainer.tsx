import { InformationItem } from '@components/items/InformationItem';

import { InformationItemType } from '@constants/temp/textes';

interface InformationListProps {
  data: InformationItemType[];
}

export const InformationList = ({ data }: InformationListProps) =>
  data.map((item) => (
    <InformationItem key={item.id} title={item.title} text={item.text} />
  ));
