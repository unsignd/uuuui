import { createContext, useContext } from 'react';
import { ThemeContextType } from '../types';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme() must be used within a Provider.');
  }

  return context;
}
