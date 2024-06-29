import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { ColorType, PriorityType, ThemeType } from '../../types';
import { toRem } from '../../utils';
import { useTheme } from '../../contexts';
import { Sans } from '../../global';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  color?: ColorType;
  priority?: PriorityType;
}

const Wrapper = styled(Sans)<{
  $theme: ThemeType;
}>`
  color: ${(props) => props.theme[props.$theme]['base.500']};

  font-size: ${toRem(24)}rem;
  font-weight: 700;
`;

export default function Heading({ children, ...attr }: TextProps) {
  const { theme } = useTheme();

  return (
    <Wrapper {...attr} $theme={theme}>
      {children}
    </Wrapper>
  );
}
