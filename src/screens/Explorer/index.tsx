import { ScrollView, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Header } from './widgets/Header';
import { NewEquipment } from './widgets/NewEquipment';
import { OrderTypeInformation } from './widgets/OrderTypeInformation';
import { PopularEquipment } from './widgets/PopularEquipment';
import { ProductsByCategory } from './widgets/ProductsByCategory';

export const ExplorerScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { bottom } = useSafeAreaInsets();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.contentContainerStyle,
        { paddingBottom: bottom },
      ]}
    >
      <Header />
      <View style={styles.bodyContainerStyle}>
        <NewEquipment />
        <PopularEquipment />
        <OrderTypeInformation />
        <ProductsByCategory />
      </View>
    </ScrollView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
  bodyContainerStyle: {
    flex: 1,
    padding: theme.paddings.md,
    gap: theme.margins.md,
  },
}));
