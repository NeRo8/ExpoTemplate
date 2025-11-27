import { useState } from 'react';

import { TouchableOpacity, View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

type OrderTypes = 'rent' | 'buy';

const orderTypeRecord = {
  rent: [
    'With Huge fleet of reliable machines masaha has showed its mettle on kuwait mega projects.',
    'Masaha is one stop shop',
    'As contractors embrace rentals, Masaha is well positioned with its large and modern fleet.',
  ],
  buy: [
    'high QUALITY Products',
    'Professional Product Support',
    'Profitable Investment',
  ],
};

export const OrderTypeInformation = () => {
  const { styles } = useStyles(stylesheet);
  const [selectedOrderType, setSelectedOrderType] =
    useState<OrderTypes>('rent');

  const content = orderTypeRecord[selectedOrderType];

  const isRentSelected = selectedOrderType === 'rent';

  const handlePressRentButton = () => {
    setSelectedOrderType('rent');
  };

  const handlePressBuyButton = () => {
    setSelectedOrderType('buy');
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={handlePressRentButton}
          style={[
            styles.buttonContainerStyle,
            styles.rentButtonContainerStyle,
            isRentSelected && styles.activeButtonContainerStyle,
          ]}
        >
          <CustomText style={[isRentSelected && styles.activeButtonTextStyle]}>
            Rent
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePressBuyButton}
          style={[
            styles.buttonContainerStyle,
            styles.buyButtonContainerStyle,
            !isRentSelected && styles.activeButtonContainerStyle,
          ]}
        >
          <CustomText style={[!isRentSelected && styles.activeButtonTextStyle]}>
            Buy
          </CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainerStyle}>
        {content.map((item) => (
          <CustomText key={item} style={styles.contentTextStyle}>
            {item}
          </CustomText>
        ))}
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
  },
  buttonContainerStyle: {
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadius.xxl,
    width: '55%',
    height: 60,
    borderWidth: 1,
    borderColor: theme.colors.borders,
  },
  rentButtonContainerStyle: {
    left: 0,
  },
  buyButtonContainerStyle: {
    right: 0,
    position: 'absolute',
  },
  contentContainerStyle: {
    gap: theme.margins.md,
    marginTop: theme.margins.md,
  },
  activeButtonContainerStyle: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    zIndex: 100,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  activeButtonTextStyle: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
  contentTextStyle: {
    textTransform: 'uppercase',
    fontWeight: theme.fontWeights.extraBold,
  },
}));
