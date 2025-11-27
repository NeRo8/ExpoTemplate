import { View } from 'react-native';

import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

import { Product } from '@constants/temp/product';

interface OrderedProductsProps {
  data: Product[];
}

export const OrderedProducts = ({ data }: OrderedProductsProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.productsContainerStyle}>
      <CustomText type="h4" style={styles.headerTitleStyle}>
        Ordered Products
      </CustomText>
      <View style={styles.productsListContainerStyle}>
        {data.map((product, index) => (
          <View
            key={product.id}
            style={[index !== data.length - 1 && styles.productContainerStyle]}
          >
            <CustomText style={styles.productNameStyle}>
              {product.name}
            </CustomText>
            <Image
              source={{ uri: product.image }}
              contentFit="contain"
              style={styles.productImageStyle}
            />
            <View style={styles.productParamsContainerStyle}>
              {product.params.map((param) => (
                <CustomText key={param.id} style={styles.productParamStyle}>
                  {param.name}: {param.value}
                </CustomText>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  productsContainerStyle: {
    gap: theme.margins.md,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
    backgroundColor: theme.colors.white,
  },
  headerTitleStyle: {
    marginBottom: theme.margins.sm,
    fontWeight: theme.fontWeights.bold,
  },
  productsListContainerStyle: {
    gap: theme.margins.sm,
  },
  productContainerStyle: {
    borderBottomWidth: 1,
    borderColor: theme.colors.borders,
    marginBottom: theme.paddings.xxl,
    paddingBottom: theme.paddings.xxl,
  },
  productImageStyle: {
    width: '100%',
    height: 200,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.white,
  },
  productNameStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.md,
    marginBottom: theme.margins.sm,
    color: theme.colors.primary,
  },
  productParamsContainerStyle: {
    gap: theme.margins.sm,
    marginTop: theme.margins.sm,
  },
  productParamStyle: {
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.xs,
    color: theme.colors.label,
  },
}));
