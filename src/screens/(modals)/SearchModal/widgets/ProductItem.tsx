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
      <CustomText style={styles.nameStyle}>{product.name}</CustomText>
      <Image
        style={styles.imageStyle}
        contentFit="contain"
        source={{ uri: product.image }}
      />
      <CustomButton
        title="Add to order"
        onPress={() => {}}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.xs,
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: 150,
  },
  nameStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.md,
    marginBottom: theme.margins.sm,
    color: theme.colors.primary,
  },
  buttonStyle: {
    borderRadius: theme.borderRadius.xxxl,
  },
}));
