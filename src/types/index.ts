export type ColorsetType = {
  'base.100': string;
  'base.200': string;
  'base.300': string;
  'base.400': string;
  'base.500': string;
};

export type ThemeType = 'light' | 'dark';

export type PaletteType = {
  [theme in ThemeType]: ColorsetType;
};

export type CurveType = 'normal' | 'full';

export type BorderType = 'visible' | 'on_hover' | 'invisible';

export interface PaletteContextType {
  palette: PaletteType;
  setPalette: (palette: PaletteType) => void;
}

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
