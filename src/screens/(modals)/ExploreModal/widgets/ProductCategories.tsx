import { View, TouchableOpacity } from 'react-native';

import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

import { ProductCategoryItem } from '@constants/temp';

type ProductCategoriesProps = {
  data: ProductCategoryItem[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

export const ProductCategories = ({
  data,
  selectedValue,
  onSelect,
}: ProductCategoriesProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View>
      <CustomText type="h3" style={styles.groupLabelStyle}>
        Categories
      </CustomText>
      <View style={styles.categoriesContainerStyle}>
        {data.map((item) => {
          const isSelected = selectedValue === item.id;
          const handlePress = () => onSelect(item.id);
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.categoryContainerStyle,
                isSelected && styles.selectedCategoryContainerStyle,
              ]}
              onPress={handlePress}
            >
              <Image
                source={item.image}
                contentFit="contain"
                style={styles.imageStyle}
              />
              <CustomText type="label" style={styles.categoryLabelStyle}>
                {item.name}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
  },
  groupLabelStyle: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: theme.margins.md,
  },
  categoriesContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.margins.md,
  },
  imageStyle: {
    width: 60,
    height: 60,
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
    width: '30%',
  },
  selectedCategoryContainerStyle: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  categoryLabelStyle: {
    textAlign: 'center',
  },
  filtersContainerStyle: {
    gap: theme.margins.xl,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.md,
  },
  filtersListContainerStyle: {
    gap: theme.margins.md,
  },
}));
