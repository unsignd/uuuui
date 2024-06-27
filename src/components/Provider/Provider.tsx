import { ReactNode, useState } from 'react';
import { PaletteType, ThemeType } from '../../types/theme';
import { PaletteContext } from '../../contexts/Palette';
import { ThemeContext } from '../../contexts/Theme';

interface ProviderProps {
  children: ReactNode;

  palette?: PaletteType;
  theme?: ThemeType;
}

export default function Provider({
  children,
  palette: initialPalette = {
    light: {
      primary: '',

      'base.100': '#ffffff',
      'base.200': '#e6e7eb',
      'base.300': '#ced0d6',
      'base.400': '#a0a4ad',
      'base.500': '#08080a',
    },
    dark: {
      primary: '#1f63eb',

      'base.100': '#08080a',
      'base.200': '#181a1f',
      'base.300': '#292c33',
      'base.400': '#4d525c',
      'base.500': '#ffffff',
    },
  },
  theme: initialTheme = 'light',
}: ProviderProps) {
  const [palette, setPalette] = useState<PaletteType>(initialPalette);
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </PaletteContext.Provider>
  );
}
