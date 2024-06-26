import { createContext, useContext } from 'react';
import { PaletteContextType } from '../types';

export const PaletteContext = createContext<PaletteContextType | undefined>(
  undefined
);

export function usePalette(): PaletteContextType {
  const context = useContext(PaletteContext);

  if (!context) {
    throw new Error('usePalette() must be used within a Provider');
  }

  return context;
}
