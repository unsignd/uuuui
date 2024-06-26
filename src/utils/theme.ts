import { ThemeType } from '../types';

let currentTheme: ThemeType = ThemeType.LIGHT;

export function getTheme(): ThemeType {
  return currentTheme;
}

export function setTheme(theme: ThemeType): void {
  currentTheme = theme;
}
