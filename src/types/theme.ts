export type ColorsetType = {
  'primary.100': string;
  'primary.200': string;

  'danger.100': string;
  'danger.200': string;

  'warning.100': string;
  'warning.200': string;

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
