import Configs from '../configs';
import { PaletteType, ThemeType } from '../types';

export function toRem(px: number): number {
  return px / 16;
}

export function getPalette(): {
  [theme in ThemeType]: PaletteType;
} {
  return Configs.palette;
}

export function setPalette(palette: {
  [theme in ThemeType]: PaletteType;
}): void {
  Configs.palette = palette;
}

export function getTheme(): ThemeType {
  return Configs.theme;
}

export function setTheme(theme: ThemeType): void {
  Configs.theme = theme;
}
