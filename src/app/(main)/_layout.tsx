import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { useStyles } from 'react-native-unistyles';

export default function MainLayout() {
  const { theme } = useStyles();
  return (
    <Tabs
      screenOptions={{
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
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.placeholder,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.xs,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(services)"
        options={{
          title: 'Services',
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(about)"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
