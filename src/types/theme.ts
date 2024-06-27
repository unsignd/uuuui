export type ColorsetType = {
  primary: string;

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
