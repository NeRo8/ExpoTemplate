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

export default function ServicesLayout() {
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
      <MaterialTopTabs.Screen name="index" options={{ title: 'Training' }} />
      <MaterialTopTabs.Screen
        name="operators-training"
        options={{ title: 'Operators Training' }}
      />
      <MaterialTopTabs.Screen
        name="after-sales"
        options={{ title: 'After Sales And Spare Parts' }}
      />
    </MaterialTopTabs>
  );
}
