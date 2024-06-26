import { usePalette, useTheme } from '../contexts';
import { PaletteType, ThemeType } from '../types';

export function toRem(px: number): number {
  return px / 16;
}
