import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';
import { useStyles } from 'react-native-unistyles';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function AboutLayout() {
  const { theme } = useStyles();
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.xs,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.placeholder,
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      <MaterialTopTabs.Screen name="index" options={{ title: 'About Us' }} />
      <MaterialTopTabs.Screen
        name="contact-us"
        options={{ title: 'Contact Us' }}
      />
    </MaterialTopTabs>
  );
}
