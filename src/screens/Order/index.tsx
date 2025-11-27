import { View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { InformationItem } from '@screens/Orders/widgets/InformationItem';

import { ScrollContainer } from '@components/containers/ScrollContainer';
import { CustomText } from '@components/textes/CustomText';

import { ORDERS } from '@constants/temp/orders';

import { OrderedProducts } from './widgets/OrderedProducts';

type OrderScreenParams = {
  id: string;
};

export const OrderScreen = () => {
  const { id } = useLocalSearchParams<OrderScreenParams>();
  const { styles } = useStyles(stylesheet);

  const order = ORDERS.find((order) => order.id === id);

  if (!order) {
    return <CustomText>Order not found</CustomText>;
  }
  return (
    <ScrollContainer>
      <View style={styles.informationContainerStyle}>
        <InformationItem title="ID" text={order.id} />
        <InformationItem title="Type" text={order.type} />
        <InformationItem title="Started date" text={order.startedDate} />
        <InformationItem title="Ended date" text={order.endedDate} />
        <InformationItem title="Total" text={order.total} />
      </View>

      <OrderedProducts data={order.products} />
    </ScrollContainer>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  imageStyle: {
    width: '100%',
    height: '40%',
  },
  informationContainerStyle: {
    gap: theme.margins.md,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
    backgroundColor: theme.colors.white,
  },
}));
