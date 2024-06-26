import { PaletteType, ThemeType } from '../types';

export default class Configs {
  static palette: {
    [theme in ThemeType]: PaletteType;
  } = {
    light: {
      'base.100': '#f2f3f5',
      'base.200': '',
      'base.300': '#ced0d6',
      'base.400': '',
      'base.500': '#08080a',
    },
    dark: {
      'base.100': '#08080a',
      'base.200': '',
      'base.300': '#202329',
      'base.400': '',
      'base.500': '#f2f3f5',
    },
  };

  static theme: ThemeType = 'light';
}
