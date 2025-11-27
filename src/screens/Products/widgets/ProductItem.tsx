import { View } from 'react-native';

import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomButton } from '@components/buttons/CustomButton';
import { CustomText } from '@components/textes/CustomText';

import { Product } from '@constants/temp/product';

interface ProductItemProps extends Product {}

export const ProductItem = (product: ProductItemProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.containerStyle}>
      <Image
        source={{ uri: product.image }}
        contentFit="contain"
        style={styles.imageStyle}
      />
      <CustomText style={styles.nameStyle}>{product.name}</CustomText>
      <View style={styles.paramsContainerStyle}>
        {product.params.map((param) => (
          <CustomText key={param.id} style={styles.paramStyle}>
            {param.name}:{' '}
            <CustomText style={styles.valueStyle}>{param.value}</CustomText>
          </CustomText>
        ))}
      </View>
      <CustomButton title="Add to order" onPress={() => {}} />
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
  imageStyle: {
    height: 200,
    width: '100%',
  },
  paramsContainerStyle: {
    gap: theme.margins.xs,
    marginVertical: theme.margins.md,
  },
  nameStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.md,
    marginVertical: theme.margins.sm,
    color: theme.colors.primary,
  },
  paramStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xs,
    color: theme.colors.label,
  },
  valueStyle: {
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.xs,
    color: theme.colors.label,
  },
}));
