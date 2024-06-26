import { PaletteType, ThemeType } from './theme';

export interface PaletteContextType {
  palette: PaletteType;
  setPalette: (palette: PaletteType) => void;
}

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
