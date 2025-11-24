import { useEffect } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, Link } from 'expo-router';
import { useStyles } from 'react-native-unistyles';

import ProductsScreenPage from '@screens/ProductsScreenPage';

export default function ProductsScreen() {
  const { theme } = useStyles();
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
  }, []);

  return <ProductsScreenPage />;
}
