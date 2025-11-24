import { useState } from 'react';

import { FlatList, View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SearchInput } from '@components/inputs/SearchInput';
import {
  SegmentControl,
  SegmentItem,
} from '@components/pickers/SegmentControll';
import { CustomText } from '@components/textes/CustomText';

import { ProductItem } from './widgets/ProductItem';

const data: SegmentItem[] = [
  { id: 'rent', title: 'Rent' },
  { id: 'buy', title: 'Buy' },
];

const renderItem = (item: any) => <ProductItem {...item} />;

export const SearchScreenModal = () => {
  const { styles } = useStyles(stylesheet);

  const [activeId, setActiveId] = useState('rent');
  const [query, setQuery] = useState('');
  const [results, _setResults] = useState([]);

  return (
    <View style={styles.modalContainerStyle}>
      <SegmentControl data={data} activeId={activeId} onPress={setActiveId} />
      <SearchInput value={query} onChangeText={setQuery} />

      <FlatList
        data={[]}
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
  },
}));
