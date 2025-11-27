import { Stack } from 'expo-router';
import { useStyles } from 'react-native-unistyles';

export default function AuthLayout() {
  const { theme } = useStyles();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
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
      <Stack.Screen name="index" options={{ title: 'Sign In' }} />
      <Stack.Screen name="sign-up" options={{ title: 'Sign Up' }} />
      <Stack.Screen
        name="reset-password"
        options={{ title: 'Reset Password' }}
      />
    </Stack>
  );
}
