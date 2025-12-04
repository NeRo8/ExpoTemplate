import { View } from 'react-native';

import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

import { productCategories } from '@constants/temp/categories';

export const ProductsByCategory = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.containerStyle}>
      <CustomText type="h3" style={styles.titleStyle}>
        Explore by{' '}
        <CustomText type="h3" style={[styles.titleStyle, styles.redTitleStyle]}>
          category
        </CustomText>
      </CustomText>
      <View style={styles.categoriesContainerStyle}>
        {productCategories.map((category) => (
          <View key={category.id} style={styles.categoryContainerStyle}>
            <Image
              source={category.image}
              contentFit="contain"
              style={styles.categoryImageStyle}
            />
            <CustomText type="label" style={styles.categoryTitleStyle}>
              {category.name}
            </CustomText>
          </View>
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
  },
  titleStyle: {
    textTransform: 'uppercase',
    fontWeight: theme.fontWeights.extraBold,
  },
  redTitleStyle: {
    color: theme.colors.primary,
  },
  categoryTitleStyle: {
    textTransform: 'uppercase',
    fontWeight: theme.fontWeights.extraBold,
  },
  categoryImageStyle: {
    width: 60,
    height: 60,
  },
  categoriesContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.margins.sm,
    marginTop: theme.margins.md,
  },
  categoryContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.margins.md,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
    backgroundColor: theme.colors.white,
    width: 100,
    height: 150,
  },
}));
