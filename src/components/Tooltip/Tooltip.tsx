import 'tippy.js/dist/tippy.css';

import styled from 'styled-components';
import { ThemeType } from '../../types';
import { useTheme } from '../../contexts';
import { ReactElement } from 'react';
import Tippy from '@tippyjs/react';

interface TooltipProps {
  children: ReactElement;

  text: string;
}

const Wrapper = styled(Tippy)<{
  $theme: ThemeType;
}>``;

export default function Tooltip({ children, text }: TooltipProps) {
  const { theme } = useTheme();

  return (
    <Wrapper $theme={theme} content="Hello">
      {children}
    </Wrapper>
  );
}
