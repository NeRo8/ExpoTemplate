import '@themes';

import { useEffect } from 'react';

import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useStyles } from 'react-native-unistyles';

import { useIsAuthenticatedSelector } from '@store/AuthStorage';

export default function RootLayout() {
  const { theme } = useStyles();
  const router = useRouter();

  const isAuthenticated = useIsAuthenticatedSelector();

  useEffect(() => {
    const redirect = setTimeout(() => {
      const routeName = isAuthenticated ? '/(main)' : '/(auth)';
      router.replace(routeName);
    }, 1000);
    return () => clearTimeout(redirect);
  }, [router, isAuthenticated]);

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: theme.colors.background },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.white,
          headerTitleStyle: {
            fontFamily: theme.fonts.bold,
            fontWeight: theme.fontWeights.bold,
          },
          headerBackButtonDisplayMode: 'minimal',
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
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
          name="about-us"
          options={{
            headerShown: true,
            headerTitle: 'About Us',
          }}
        />
        <Stack.Screen
          name="contact-us"
          options={{
            headerShown: true,
            headerTitle: 'Contact Us',
          }}
        />
        <Stack.Screen
          name="(services)"
          options={{
            headerShown: true,
            headerTitle: 'Our Services',
          }}
        />
        <Stack.Screen
          name="order/[id]"
          options={{
            headerShown: true,
            headerTitle: 'Order Detail',
          }}
        />
        <Stack.Screen
          name="(modals)/search-modal"
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(modals)/products-modal"
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
