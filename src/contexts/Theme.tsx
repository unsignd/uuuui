import { createContext, useContext } from 'react';
import { ThemeContextType } from '../types/provider';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  console.log(context);

  if (context === undefined) {
    throw new Error('useTheme() must be used within a Provider.');
  }

  return context;
}
