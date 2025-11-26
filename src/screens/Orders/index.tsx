import { FlatList, View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { OrderItem } from './widgets/OrderItem';

const ORDERS_INFORMATION = [
  {
    id: '0000-0000-0000-0000',
    startedDate: '2025-01-01',
    endedDate: '2025-01-01',
    total: '$11000.00',
    type: 'Rent',
    products: new Array(4).fill({}).map((_, index) => ({
      id: index.toString(),
    })),
  },
  {
    id: '0000-0000-0000-0001',
    startedDate: '2025-01-01',
    endedDate: '2025-01-01',
    total: '$40000.00',
    type: 'Buy',
    products: new Array(4).fill({}).map((_, index) => ({
      id: index.toString(),
    })),
  },
];

const renderItem = ({ item }: { item: any }) => {
  return <OrderItem {...item} />;
};

export const OrdersScreen = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={ORDERS_INFORMATION}
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
