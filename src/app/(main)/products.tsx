import { useEffect } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, Link } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { ProductsScreen } from '@screens/Products';

export default function ProductsPage() {
  const { theme, styles } = useStyles(stylesheet);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Link href="/(modals)/products-modal">
          <Ionicons
            name="filter-outline"
            size={24}
            color={theme.colors.white}
          />
        </Link>
      ),
    });
  }, [navigation, theme, styles]);

  return <ProductsScreen />;
}

const stylesheet = createStyleSheet((theme) => ({
  headerInputContainer: {
    height: 36,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.white,
  },
}));
