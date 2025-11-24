import '@themes';

import { Stack } from 'expo-router';
import { useStyles } from 'react-native-unistyles';

export default function RootLayout() {
  const { theme } = useStyles();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    />
  );
}
