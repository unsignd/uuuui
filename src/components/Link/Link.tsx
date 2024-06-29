import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType } from '../../types';
import { PriorityType } from '../../types';
import { Link as _Link } from 'react-router-dom';
import { toRem } from '../../utils';
import { Sans } from '../../global';

export interface LinkProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  priority?: PriorityType;
}

const Wrapper = styled(Sans)<{
  $priority: PriorityType;

  $colorset: ColorsetType;
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
      low: props.$colorset['base.400'],
      medium: props.$colorset['base.400'],
      high: props.$colorset['base.500'],
    }[props.$priority])};

  color: ${(props) =>
    ({
      low: props.$colorset['base.400'],
      medium: props.$colorset['base.400'],
      high: props.$colorset['base.500'],
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
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Wrapper $priority={priority} $colorset={palette[theme]} {...attr}>
      {children}
    </Wrapper>
  );
}
