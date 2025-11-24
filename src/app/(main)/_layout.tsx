import { Tabs } from 'expo-router';
import { useStyles } from 'react-native-unistyles';

export default function MainLayout() {
  const { theme } = useStyles();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: theme.colors.background },
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontFamily: theme.fonts.bold,
          fontWeight: theme.fontWeights.bold,
        },
        headerRightContainerStyle: {
          paddingRight: theme.paddings.md,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          headerShown: true,
        }}
      />
      <Tabs.Screen name="services" options={{ title: 'Services' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
    </Tabs>
  );
}
