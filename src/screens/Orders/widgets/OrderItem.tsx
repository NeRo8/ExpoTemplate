import { View } from 'react-native';

import { Link } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

import { InformationItem } from './InformationItem';

export const OrderItem = (order: any) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View key={order.id} style={styles.containerStyle}>
      <View style={styles.orderInformationContainerStyle}>
        <InformationItem title="ID" text={order.id} />
        <InformationItem title="Type" text={order.type} />
        <InformationItem title="Started date" text={order.startedDate} />
        <InformationItem title="Ended date" text={order.endedDate} />
      </View>
      <View style={styles.productsContainerStyle}>
        {order.products.map((product) => (
          <View key={product.id}>
            <View style={styles.productImageStyle} />
          </View>
        ))}
      </View>
      <View style={styles.bottomContainerStyle}>
        <InformationItem title="Total" text={order.total} />
        <Link href={`/order/${order.id}`}>
          <CustomText style={styles.orderDetailsTextStyle}>
            Order details
          </CustomText>
        </Link>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
    backgroundColor: theme.colors.white,
  },
  titleStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.md,
    marginBottom: theme.margins.md,
  },
  ordersContainerStyle: {
    gap: theme.margins.md,
  },
  orderInformationContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.margins.xs,
  },
  productsContainerStyle: {
    gap: theme.margins.xs,
    flexDirection: 'row',
    marginVertical: theme.margins.md,
  },
  productImageStyle: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.light,
  },
  orderDetailsTextStyle: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xs,
  },
  bottomContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
