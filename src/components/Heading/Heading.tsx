import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeType } from '../../types';
import { toRem } from '../../utils';
import { useTheme } from '../../hooks';
import { Sans } from '../../global';

interface HeadingProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Wrapper = styled(Sans)<{
  $theme: ThemeType;
}>`
  color: ${(props) => props.theme[props.$theme]['base.500']};

  font-size: ${toRem(24)}rem;
  font-weight: 700;
`;

export default function Heading({ children, ...attr }: HeadingProps) {
  const { theme } = useTheme();

  return (
    <Wrapper {...attr} $theme={theme}>
      {children}
    </Wrapper>
  );
}
