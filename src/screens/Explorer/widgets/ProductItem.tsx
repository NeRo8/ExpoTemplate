import { View } from 'react-native';

import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { RoundedButton } from '@components/buttons/RoundedButton';
import { CustomText } from '@components/textes/CustomText';

import { Product } from '@constants/temp/product';

interface ProductItemProps extends Product {}

export const ProductItem = (product: ProductItemProps) => {
  const { styles } = useStyles(stylesheet);

  const handlePressRent = () => {
    console.log('Rent');
  };

  const handlePressBuy = () => {
    console.log('Buy');
  };

  return (
    <View style={styles.containerStyle}>
      <CustomText style={styles.nameStyle}>{product.name}</CustomText>
      <View style={styles.imageContainerStyle}>
        <Image
          source={{ uri: product.image }}
          contentFit="contain"
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.paramsContainerStyle}>
        {product.params.map((item) => (
          <View key={item.id}>
            <CustomText style={styles.labelStyle}>
              {item.name}:{' '}
              <CustomText style={styles.valueStyle}>{item.value}</CustomText>
            </CustomText>
          </View>
        ))}
      </View>
      <View style={styles.rowStyle}>
        <RoundedButton
          title="Rent"
          type="outline"
          onPress={handlePressRent}
          buttonContainerStyle={styles.buttonContainerStyle}
        />
        <RoundedButton
          title="Buy"
          onPress={handlePressBuy}
          buttonContainerStyle={styles.buttonContainerStyle}
        />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
    backgroundColor: theme.colors.white,
    width: 300,
  },
  imageContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  labelStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xs,
  },
  valueStyle: {
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.xs,
  },
  paramsContainerStyle: {
    gap: theme.margins.xs,
    marginVertical: theme.margins.md,
  },
  nameStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.lg,
    color: theme.colors.primary,
  },
  rowStyle: {
    flexDirection: 'row',
    gap: theme.margins.md,
  },
  buttonContainerStyle: {
    flex: 1,
  },
}));
