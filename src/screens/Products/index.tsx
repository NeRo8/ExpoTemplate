import { FlatList } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { products, Product } from '@constants/temp/product';

import { ProductItem } from './widgets/ProductItem';

const renderItem = ({ item }: { item: Product }) => {
  return <ProductItem {...item} />;
};

export const ProductsScreen = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

const stylesheet = createStyleSheet((theme) => ({
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
  },
}));
