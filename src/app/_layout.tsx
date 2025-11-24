import '@themes';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useStyles } from 'react-native-unistyles';

export default function RootLayout() {
  const { theme } = useStyles();

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(main)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="search-modal"
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
            headerTitle: 'Search',
          }}
        />
      </Stack>
    </>
  );
}
