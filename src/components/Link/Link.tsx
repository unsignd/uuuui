import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts';
import { ThemeType } from '../../types';
import { PriorityType } from '../../types';
import { toRem } from '../../utils';
import { Sans } from '../../global';

export interface LinkProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  priority?: PriorityType;
}

const Wrapper = styled(Sans)<{
  $priority: PriorityType;

  $theme: ThemeType;
}>`
  font-size: ${toRem(14)}rem;
  text-decoration: ${(props) =>
    ({
      low: 'none',
      medium: 'underline',
      high: 'none',
    }[props.$priority])};
  text-decoration-color: ${(props) =>
    ({
      low: props.theme[props.$theme]['base.400'],
      medium: props.theme[props.$theme]['base.400'],
      high: props.theme[props.$theme]['base.500'],
    }[props.$priority])};

  color: ${(props) =>
    ({
      low: props.theme[props.$theme]['base.400'],
      medium: props.theme[props.$theme]['base.400'],
      high: props.theme[props.$theme]['base.500'],
    }[props.$priority])};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Link({
  children,
  priority = 'medium',
  ...attr
}: LinkProps) {
  const { theme } = useTheme();

  return (
    <Wrapper $priority={priority} $theme={theme} {...attr}>
      {children}
    </Wrapper>
  );
}
