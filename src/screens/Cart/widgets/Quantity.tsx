import { TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CustomText } from '@components/textes/CustomText';

interface QuantityProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export const Quantity = ({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityProps) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={styles.quantityContainerStyle}>
      <TouchableOpacity style={styles.buttonStyle} onPress={onDecrease}>
        <Ionicons name="remove-outline" size={24} color={theme.colors.white} />
      </TouchableOpacity>
      <CustomText>{quantity}</CustomText>
      <TouchableOpacity style={styles.buttonStyle} onPress={onIncrease}>
        <Ionicons name="add-outline" size={24} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  quantityContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.margins.sm,
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    padding: theme.paddings.xs,
    borderRadius: theme.borderRadius.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
