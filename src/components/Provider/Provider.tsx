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
      'base.100': '#ffffff',
      'base.200': '',
      'base.300': '#dadce0',
      'base.400': '#a0a4ad',
      'base.500': '#08090a',
    },
    dark: {
      'base.100': '#08080a',
      'base.200': '',
      'base.300': '#202329',
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
