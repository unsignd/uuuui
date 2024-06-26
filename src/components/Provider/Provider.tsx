import { ReactNode, useState } from 'react';
import { PaletteType, ThemeType } from '../../types';
import { PaletteContext } from '../../contexts/Palette';
import { ThemeContext } from 'styled-components';

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const [palette, setPalette] = useState<PaletteType>({
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
  });
  const [theme, setTheme] = useState<ThemeType>('light');

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </PaletteContext.Provider>
  );
}
