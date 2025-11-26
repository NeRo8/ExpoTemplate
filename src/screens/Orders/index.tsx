import { FlatList, View, ListRenderItemInfo } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Order, ORDERS } from '@constants/orders';

import { OrderItem } from './widgets/OrderItem';

const renderItem = ({ item }: ListRenderItemInfo<Order>) => {
  return <OrderItem {...item} />;
};

export const OrdersScreen = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
  },
}));
