import { usePalette, useTheme } from '../contexts';
import { PaletteType, ThemeType } from '../types/theme';

export function toRem(px: number): number {
  return px / 16;
}
