import styled from 'styled-components';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType } from '../../types';
import { PriorityType } from '../../types';
import { Link as _Link } from 'react-router-dom';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;

  to: string;
  priority?: PriorityType;
}

const Wrapper = styled(_Link)<{
  $priority: PriorityType;

  $colorset: ColorsetType;
}>`
  color: ${(props) =>
    ({
      low: props.$colorset['base.400'],
      medium: props.$colorset['base.500'],
      high: props.$colorset['base.500'],
    }[props.$priority])};
`;

export default function Link({
  children,
  to,
  priority = 'medium',
  ...attr
}: LinkProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Wrapper $priority={priority} $colorset={palette[theme]} to={to} {...attr}>
      {children}
    </Wrapper>
  );
}
