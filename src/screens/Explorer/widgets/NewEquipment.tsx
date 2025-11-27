import { FlatList, View } from 'react-native';

import { Link } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

import { Product, products } from '@constants/temp/product';

import { ProductItem } from './ProductItem';

const renderItem = ({ item }: { item: Product }) => {
  return <ProductItem {...item} />;
};

export const NewEquipment = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.containerStyle}>
      <View style={styles.row}>
        <View>
          <CustomText type="h3" style={styles.titleStyle}>
            Explore our
          </CustomText>
          <CustomText type="h3" style={styles.titleStyle}>
            <CustomText
              type="h3"
              style={[styles.titleStyle, styles.redTitleStyle]}
            >
              new
            </CustomText>{' '}
            equipment
          </CustomText>
        </View>
        <Link href="/(main)/products">
          <CustomText type="h3" style={styles.linkStyle}>
            View all
          </CustomText>
        </Link>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products.slice(0, 4)}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContentContainerStyle}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    backgroundColor: theme.colors.white,
    padding: theme.paddings.md,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.borders,
  },
  titleStyle: {
    textTransform: 'uppercase',
    fontWeight: theme.fontWeights.extraBold,
  },
  redTitleStyle: {
    color: theme.colors.primary,
  },
  flatListContentContainerStyle: {
    gap: theme.margins.md,
    marginTop: theme.margins.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkStyle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.primary,
  },
}));
