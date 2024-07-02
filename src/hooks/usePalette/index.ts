import { useContext } from 'react';
import { PaletteContextType } from '../../types';
import { PaletteContext } from '../../contexts';

export default function usePalette(): PaletteContextType {
  const context = useContext(PaletteContext);

  if (context === undefined) {
    throw new Error('usePalette() must be used within a Provider.');
  }

  return context;
}
