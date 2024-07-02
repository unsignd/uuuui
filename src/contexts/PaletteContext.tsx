import { createContext } from 'react';
import { PaletteContextType } from '../types';

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

export default PaletteContext;
