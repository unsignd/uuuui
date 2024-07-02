import { createContext } from 'react';
import { ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
