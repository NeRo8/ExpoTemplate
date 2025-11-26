import { useLocalSearchParams } from 'expo-router';

import { CustomText } from '@components/textes/CustomText';

export default function OrderPage() {
  const { id: _id } = useLocalSearchParams<{ id: string }>();

  return <CustomText>Order Page</CustomText>;
}
