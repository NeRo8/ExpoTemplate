import { View } from 'react-native';

import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import {
  SegmentControl,
  SegmentItem,
} from '@components/pickers/SegmentControll';
import { CustomText } from '@components/textes/CustomText';

import {
  CartItem,
  CartOrderType,
  useCartSelector,
  useUpdateProductTypeAction,
} from '@store/CartStorage';

import { formatPrice } from '@utils/price';

import { Quantity } from './Quantity';

const data: SegmentItem[] = [
  { id: 'rent', title: 'Rent' },
  { id: 'buy', title: 'Buy' },
];

const OrderedItem = (item: CartItem) => {
  const { styles } = useStyles(stylesheet);
  const updateProductType = useUpdateProductTypeAction();

  const handlePress = (id: string) => {
    updateProductType(item.product.id, id as CartOrderType);
  };

  return (
    <View key={item.product.id}>
      <View style={styles.row}>
        <Image
          source={{ uri: item.product.image }}
          contentFit="contain"
          style={styles.imageStyle}
        />
        <View>
          <CustomText style={styles.nameStyle}>{item.product.name}</CustomText>
          <View style={styles.fieldsContainerStyle}>
            <CustomText style={styles.labelStyle}>
              Price:{' '}
              <CustomText style={styles.priceStyle}>
                {formatPrice(item.product.price)}
              </CustomText>
            </CustomText>
            <SegmentControl
              data={data}
              activeId={item.type}
              onPress={handlePress}
            />
          </View>
        </View>
      </View>
      <View style={styles.footerContainerStyle}>
        <Quantity
          quantity={item.quantity}
          onDecrease={() => {}}
          onIncrease={() => {}}
        />
        <CustomText style={styles.labelStyle}>
          Total:{' '}
          <CustomText style={styles.priceStyle}>
            {formatPrice(item.product.price * item.quantity)}
          </CustomText>
        </CustomText>
      </View>
    </View>
  );
};

export const OrderedItems = () => {
  const cart = useCartSelector();

  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.containerStyle}>
      {cart.map((item) => (
        <OrderedItem key={item.product.id} {...item} />
      ))}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    gap: theme.margins.lg,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.borders,
  },
  nameStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary,
  },
  row: {
    flexDirection: 'row',
    gap: theme.margins.md,
  },
  priceStyle: {
    fontSize: theme.fontSizes.xs,
  },
  labelStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xs,
  },
  fieldsContainerStyle: {
    marginVertical: theme.margins.md,
    gap: theme.margins.sm,
  },
  quantityContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.margins.sm,
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    padding: theme.paddings.xs,
    borderRadius: theme.borderRadius.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
