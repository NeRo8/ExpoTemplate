import { useLocalSearchParams } from 'expo-router';

import { OrderScreen } from '@screens/Order';

export default function OrderPage() {
  const { id: _id } = useLocalSearchParams<{ id: string }>();

  return <OrderScreen />;
}
