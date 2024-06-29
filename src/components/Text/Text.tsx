import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { PriorityType, ThemeType } from '../../types';
import { toRem } from '../../utils';
import { useTheme } from '../../contexts';
import { Sans } from '../../global';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  priority?: PriorityType;
}

const Wrapper = styled(Sans)<{
  $priority: PriorityType;

  $theme: ThemeType;
}>`
  color: ${(props) =>
    ({
      low: props.theme[props.$theme]['base.400'],
      medium: props.theme[props.$theme]['base.500'],
      high: props.theme[props.$theme]['base.500'],
    }[props.$priority])};

  font-size: ${toRem(14)}rem;
  font-weight: 400;
`;

export default function Link({
  children,
  priority = 'medium',
  ...attr
}: TextProps) {
  const { theme } = useTheme();

  return (
    <Wrapper $priority={priority} $theme={theme} {...attr}>
      {children}
    </Wrapper>
  );
}
