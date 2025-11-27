import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SearchInput } from '@components/inputs/SearchInput';
import { SegmentControl } from '@components/pickers/SegmentControll';
import { CustomText } from '@components/textes/CustomText';

import { Product, products } from '@constants/temp/product';

import { useSearch } from './hooks/useSearch.hook';
import { ProductItem } from './widgets/ProductItem';

const renderItem = ({ item }: ListRenderItemInfo<Product>) => (
  <ProductItem {...item} />
);

export const SearchModal = () => {
  const { styles } = useStyles(stylesheet);

  const { activeId, query, results, data, setQuery, setActiveId } = useSearch();

  return (
    <View style={styles.modalContainerStyle}>
      <SegmentControl data={data} activeId={activeId} onPress={setActiveId} />
      <SearchInput value={query} onChangeText={setQuery} />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        renderItem={renderItem}
        ListHeaderComponent={() =>
          query &&
          results.length > 0 && (
            <CustomText type="label">
              Find 10 results by &ldquo;{query}&rdquo;
            </CustomText>
          )
        }
        ListEmptyComponent={() => (
          <View style={styles.emptyContainerStyle}>
            <CustomText type="h2">No results found</CustomText>
          </View>
        )}
        contentContainerStyle={styles.listContentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  modalContainerStyle: {
    flex: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
  },
  emptyContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContentContainerStyle: {
    flexGrow: 1,
    gap: theme.margins.md,
  },
  columnWrapperStyle: {
    gap: theme.margins.md,
  },
}));
