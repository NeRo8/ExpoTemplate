import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { ScrollContainer } from '@components/containers/ScrollContainer';
import { Section } from '@components/containers/Section';
import { CustomInput } from '@components/inputs/CustomInput';
import { CustomText } from '@components/textes/CustomText';

import { useCartTotalSelector } from '@store/CartStorage';

import { formatPrice } from '@utils/price';

import { OrderedItems } from './widgets/OrderedItems';

export const CartScreen = () => {
  const { styles } = useStyles(stylesheet);

  const cartTotal = useCartTotalSelector();

  return (
    <ScrollContainer>
      <Section title="Personal Information">
        <View style={styles.fieldsContainerStyle}>
          <CustomInput placeholder="Name" />
          <CustomInput placeholder="Email" />
          <CustomInput placeholder="Phone" />
        </View>
      </Section>
      <Section title="Delivery Information">
        <View style={styles.fieldsContainerStyle}>
          <CustomInput placeholder="Address" />
          <CustomInput placeholder="City" />
        </View>
      </Section>
      <Section title="Payment Information">
        <View style={styles.fieldsContainerStyle}>
          <CustomInput placeholder="Name on Card" />
          <CustomInput placeholder="Card Number" />
          <View style={styles.row}>
            <CustomInput
              placeholder="Expiration Date"
              containerStyle={styles.cardInputContainerStyle}
            />
            <CustomInput
              placeholder="CVV"
              containerStyle={styles.cardInputContainerStyle}
            />
          </View>
        </View>
      </Section>
      <Section title="Ordered Items" isVisible>
        <OrderedItems />
      </Section>
      <View style={styles.totalContainerStyle}>
        <CustomText type="h5" style={styles.labelStyle}>
          Order Total
        </CustomText>
        <CustomText type="h5" style={styles.totalStyle}>
          {formatPrice(cartTotal)}
        </CustomText>
      </View>
    </ScrollContainer>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  fieldsContainerStyle: {
    gap: theme.paddings.md,
  },
  labelStyle: {
    fontWeight: theme.fontWeights.bold,
  },
  totalStyle: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
  },
  totalContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.paddings.md,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.white,
  },
  row: {
    flexDirection: 'row',
    gap: theme.paddings.md,
  },
  cardInputContainerStyle: {
    flex: 1,
  },
}));
