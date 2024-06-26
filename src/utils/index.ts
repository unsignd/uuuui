import { palette, theme } from '../configs';
import { PaletteType, ThemeType } from '../types';

export function toRem(px: number): number {
  return px / 16;
}

export function getPalette(): PaletteType {
  return palette;
}

export function getTheme(): ThemeType {
  return theme;
}
