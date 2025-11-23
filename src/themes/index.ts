import { UnistylesRegistry } from 'react-native-unistyles';

import { lightTheme } from './light';

type AppThemes = {
  light: typeof lightTheme;
};

export const themes: AppThemes = {
  light: lightTheme,
};

export const theme = themes.light;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
}).addConfig({
  initialTheme: 'light',
  adaptiveThemes: false,
});
