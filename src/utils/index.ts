import Configs from '../configs';
import { PaletteType, ThemeType } from '../types';

export function toRem(px: number): number {
  return px / 16;
}

export function getPalette(): PaletteType {
  return Configs.palette;
}

export function setPalette(palette: PaletteType): void {
  Configs.palette = palette;
}

export function getTheme(): ThemeType {
  return Configs.theme;
}

export function setTheme(theme: ThemeType): void {
  Configs.theme = theme;
}
