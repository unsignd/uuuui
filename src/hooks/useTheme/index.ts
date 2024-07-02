import { useContext } from 'react';
import { ThemeContextType } from '../../types';
import { ThemeContext } from '../../contexts';

export default function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme() must be used within a Provider.');
  }

  return context;
}
