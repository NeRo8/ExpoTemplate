import { useState } from 'react';

import { ScrollView } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomButton } from '@components/buttons/CustomButton';

import { productCategories } from '@constants/categories';

import { ProductCategories } from './widgets/ProductCategories';
import { ProductFilters } from './widgets/ProductFilters';
import { ProductSubCategories } from './widgets/ProductSubCategories';

export const ExploreModal = () => {
  const { styles } = useStyles(stylesheet);

  const { top, bottom } = useSafeAreaInsets();

  const [selectedCategory, setSelectedCategory] = useState('1');
  const [selectedSubCategory, setSelectedSubCategory] = useState('2');
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({
    '1': ['2'],
  });

  const onApplyFilters = () => {
    console.log(selectedFilters);
  };

  const subCategories =
    productCategories.find((category) => category.id === selectedCategory)
      ?.subCategories || [];

  const filters =
    subCategories.find((subCategory) => subCategory.id === selectedSubCategory)
      ?.filters || [];

  const onSelectCategory = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubCategory('');
    setSelectedFilters({});
  };

  const onSelectSubCategory = (value: string) => {
    setSelectedSubCategory(value);
    setSelectedFilters({});
  };

  const onSelectFilter = (filterId: string, valueIds: string[]) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: valueIds,
    }));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.contentContainerStyle,
        { paddingTop: top, paddingBottom: bottom },
      ]}
    >
      <ProductCategories
        data={productCategories}
        selectedValue={selectedCategory}
        onSelect={onSelectCategory}
      />
      {selectedCategory && (
        <ProductSubCategories
          data={subCategories}
          selectedValue={selectedSubCategory}
          onSelect={onSelectSubCategory}
        />
      )}
      {selectedSubCategory && (
        <ProductFilters
          data={filters}
          selectedValues={selectedFilters}
          setSelectedValues={onSelectFilter}
        />
      )}
      <CustomButton
        title="Apply Filters"
        onPress={onApplyFilters}
        buttonContainerStyle={styles.buttonContainerStyle}
      />
    </ScrollView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
  },
  buttonContainerStyle: {
    marginTop: theme.margins.xxl,
  },
}));
