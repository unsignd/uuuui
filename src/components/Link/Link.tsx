import styled from 'styled-components';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType } from '../../types';
import { PriorityType } from '../../types';
import { Link as _Link } from 'react-router-dom';
import { toRem } from '../../utils';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;

  to: string;
  priority?: PriorityType;
}

const Wrapper = styled(_Link)<{
  $priority: PriorityType;

  $colorset: ColorsetType;
}>`
  display: flex;
  align-items: center;
  gap: ${toRem(7)}rem;

  text-decoration-color: ${(props) =>
    ({
      low: props.$colorset['base.400'],
      medium: props.$colorset['base.500'],
      high: props.$colorset['base.500'],
    }[props.$priority])};

  & svg {
    height: 16px;
  }

  & * {
    margin: 0;
    padding: 0;

    color: ${(props) =>
      ({
        low: props.$colorset['base.400'],
        medium: props.$colorset['base.500'],
        high: props.$colorset['base.500'],
      }[props.$priority])};
  }
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
