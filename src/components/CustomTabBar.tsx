import { TouchableOpacity, Text, View } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) => {
  const { theme, styles } = useStyles(stylesheet);

  const centerIndex = Math.floor(state.routes.length / 2);
  const isCenterItem = (index: number) => index === centerIndex;

  return (
    <View style={[styles.containerStyle, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : options.tabBarLabel({
                  focused: state.index === index,
                  color: '',
                  position: 'below-icon',
                  children: '',
                })
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;
        const isCenter = isCenterItem(index);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconSize = isCenter ? 28 : 24;
        const iconColor = isFocused
          ? isCenter
            ? theme.colors.white
            : theme.colors.primary
          : isCenter
            ? theme.colors.white
            : theme.colors.placeholder;

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabButton,
              isCenter && styles.tabCenterButton,
              isFocused && isCenter && styles.tabCenterButtonActive,
            ]}
          >
            {options.tabBarIcon
              ? options.tabBarIcon({
                  focused: isFocused,
                  color: iconColor,
                  size: iconSize,
                })
              : null}
            {!isCenter && (
              <Text
                style={[styles.tabLabel, isFocused && styles.tabLabelActive]}
              >
                {typeof label === 'string' ? label : ''}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.borders,
    paddingTop: theme.paddings.sm,
    paddingHorizontal: theme.paddings.xs,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.paddings.xs,
    gap: theme.margins.xxs,
  },
  tabLabel: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.xs,
    color: theme.colors.placeholder,
    marginTop: theme.margins.xxs,
  },
  tabLabelActive: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
  },
  tabCenterButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary,
    marginTop: -30,
  },
  tabCenterButtonActive: {
    backgroundColor: theme.colors.primary,
  },
}));
