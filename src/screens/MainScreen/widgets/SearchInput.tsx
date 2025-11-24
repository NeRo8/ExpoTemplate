import { View, TextInput } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const SearchInput = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.inputContainerStyle}>
      <Ionicons name="search" size={24} color={theme.colors.placeholder} />
      <TextInput
        placeholder="Browse Products ..."
        placeholderTextColor={theme.colors.placeholder}
        style={styles.inputStyle}
      />
      <Link href="/search-modal">
        <View style={styles.searchButtonStyle}>
          <Ionicons name="menu-outline" size={24} color={theme.colors.white} />
        </View>
      </Link>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  inputContainerStyle: {
    position: 'absolute',
    zIndex: 100,
    bottom: theme.paddings.md,
    left: theme.paddings.md,
    right: theme.paddings.md,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: theme.paddings.md,
    gap: theme.paddings.md,
    backgroundColor: theme.colors.inputBackground,
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: theme.borderRadius.lg,
  },
  inputStyle: {
    flex: 1,
    height: 40,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.sm,
  },
  searchButtonStyle: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.lg,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
