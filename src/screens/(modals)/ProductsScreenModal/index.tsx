import { useState } from 'react';

import { ScrollView, TouchableOpacity, View } from 'react-native';

import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

import { productFilters } from '@constants/temp';

export const ProductsScreenModal = () => {
  const { styles } = useStyles(stylesheet);

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View>
        <CustomText type="h3" style={styles.categoryTitleStyle}>
          Categories
        </CustomText>
        <View style={styles.categoryFilterContainerStyle}>
          {productFilters.map((filter) => {
            const handlePressCategory = () => setActiveCategory(filter.id);
            const isActive = activeCategory === filter.id;
            return (
              <TouchableOpacity
                key={filter.id}
                style={[
                  styles.filterContainerStyle,
                  isActive && styles.activeFilterContainerStyle,
                ]}
                onPress={handlePressCategory}
              >
                <Image
                  source={filter.image}
                  style={styles.imageStyle}
                  contentFit="contain"
                />
                <CustomText
                  type="label"
                  style={[
                    styles.titleStyle,
                    isActive && styles.activeTitleStyle,
                  ]}
                >
                  {filter.title}
                </CustomText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  contentContainerStyle: {
    flexGrow: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
  },
  categoryFilterContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.margins.md,
  },
  filterContainerStyle: {
    alignItems: 'center',
    gap: theme.margins.md,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.md,
    padding: theme.paddings.xxs,
    width: '30%',
  },
  activeFilterContainerStyle: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  imageStyle: {
    width: 60,
    height: 60,
  },
  titleStyle: {
    textAlign: 'center',
  },
  activeTitleStyle: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
  },
  categoryTitleStyle: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: theme.margins.md,
  },
}));
