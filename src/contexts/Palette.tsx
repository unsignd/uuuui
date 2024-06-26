import { createContext, useContext } from 'react';
import { PaletteContextType } from '../types/provider';

export const PaletteContext = createContext<PaletteContextType | undefined>(
  undefined
);

export function usePalette(): PaletteContextType {
  const context = useContext(PaletteContext);

  if (context === undefined) {
    throw new Error('usePalette() must be used within a Provider.');
  }

  return context;
}
