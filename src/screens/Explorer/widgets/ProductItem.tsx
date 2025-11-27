import { View } from 'react-native';

import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomButton } from '@components/buttons/CustomButton';
import { CustomText } from '@components/textes/CustomText';

import { Product } from '@constants/temp/product';

interface ProductItemProps extends Product {}

export const ProductItem = (product: ProductItemProps) => {
  const { styles } = useStyles(stylesheet);

  const handleAddToOrder = () => {};

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

      <CustomButton title="Add to order" onPress={handleAddToOrder} />
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
}));
