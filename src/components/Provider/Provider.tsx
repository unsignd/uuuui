import { ReactNode, useState } from 'react';
import { PaletteType, ThemeType } from '../../types/theme';
import { PaletteContext } from '../../contexts/Palette';
import { ThemeContext } from '../../contexts/Theme';
import { BrowserRouter } from 'react-router-dom';

interface ProviderProps {
  children: ReactNode;

  palette?: PaletteType;
  theme?: ThemeType;
}

export default function Provider({
  children,
  palette: initialPalette = {
    light: {
      'base.100': '#f2f3f5',
      'base.200': '',
      'base.300': '#ced0d6',
      'base.400': '#8c94a3',
      'base.500': '#08090a',
    },
    dark: {
      'base.100': '#08080a',
      'base.200': '',
      'base.300': '#202329',
      'base.400': '#4d525c',
      'base.500': '#f2f3f5',
    },
  },
  theme: initialTheme = 'light',
}: ProviderProps) {
  const [palette, setPalette] = useState<PaletteType>(initialPalette);
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  return (
    <BrowserRouter>
      <PaletteContext.Provider value={{ palette, setPalette }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      </PaletteContext.Provider>
    </BrowserRouter>
  );
}
