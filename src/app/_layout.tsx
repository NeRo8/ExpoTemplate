import { Stack } from 'expo-router';

import '@themes';
import { fonts } from '@constants/fonts';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: 'Expo Template',
        headerTitleStyle: { fontFamily: fonts.regular },
      }}
    />
  );
}
