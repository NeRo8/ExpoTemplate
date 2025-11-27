import { View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomCheckbox } from '@components/pickers/CustomCheckbox';
import { CustomText } from '@components/textes/CustomText';

import { FilterItem } from '@constants/temp/categories';

type ProductFiltersProps = {
  data: FilterItem[];
  selectedValues: Record<string, string[]>;
  setSelectedValues: (filterId: string, valueIds: string[]) => void;
};

export const ProductFilters = ({
  data,
  selectedValues,
  setSelectedValues,
}: ProductFiltersProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.filtersContainerStyle}>
      {data.map((item) => {
        const selectedValuesForItem = selectedValues[item.id] || [];
        return (
          <View key={item.id}>
            <CustomText type="h3" style={styles.groupLabelStyle}>
              {item.name}
            </CustomText>
            <View style={styles.filtersListContainerStyle}>
              {item.filters?.map((filter) => {
                const isFilterSelected = selectedValuesForItem?.includes(
                  filter.id
                );
                const handleValueChange = () => {
                  setSelectedValues(
                    item.id,
                    isFilterSelected
                      ? selectedValuesForItem?.filter(
                          (value) => value !== filter.id
                        )
                      : [...selectedValuesForItem, filter.id]
                  );
                };
                return (
                  <CustomCheckbox
                    key={filter.id}
                    label={filter.name}
                    value={isFilterSelected}
                    onValueChange={handleValueChange}
                  />
                );
              })}
            </View>
          </View>
        );
      })}
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
