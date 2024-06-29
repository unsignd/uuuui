import { ReactNode, useState } from 'react';
import { PaletteType, ThemeType } from '../../types/theme';
import { PaletteContext } from '../../contexts/Palette';
import { ThemeContext } from '../../contexts/Theme';
import { ModalProvider } from 'styled-react-modal';
import styled, { ThemeProvider } from 'styled-components';

export interface ProviderProps {
  children: ReactNode;

  palette?: PaletteType;
  theme?: ThemeType;
}

const ModalBackground = styled.div<{
  $opacity: number;
}>`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #08080a66;

  transition: opacity 150ms ease-in-out;

  opacity: ${(props) => props.$opacity};
`;

export default function Provider({
  children,
  palette: initialPalette = {
    light: {
      'primary.100': '#d6e4ff',
      'primary.200': '#3377ff',

      'danger.100': '#fbd4d4',
      'danger.200': '#eb2626',

      'base.100': '#ffffff',
      'base.200': '#f2f3f5',
      'base.300': '#ced0d6',
      'base.400': '#a0a4ad',
      'base.500': '#08080a',
    },
    dark: {
      'primary.100': '#0d1a37',
      'primary.200': '#1f63eb',

      'danger.100': '#310d0f',
      'danger.200': '#d62222',

      'base.100': '#08080a',
      'base.200': '#14161a',
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
    <ThemeProvider theme={palette}>
      <PaletteContext.Provider value={{ palette, setPalette }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ModalProvider backgroundComponent={ModalBackground}>
            {children}
          </ModalProvider>
        </ThemeContext.Provider>
      </PaletteContext.Provider>
    </ThemeProvider>
  );
}
