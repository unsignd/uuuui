import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType } from '../../types';
import { PriorityType } from '../../types';
import { Link as _Link } from 'react-router-dom';
import { toRem } from '../../utils';

export interface LinkProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;

  priority?: PriorityType;
}

const Container = styled.p<{
  $priority: PriorityType;

  $colorset: ColorsetType;
}>`
  margin: 0;

  display: flex;
  align-items: center;
  gap: ${toRem(7)}rem;

  font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
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
  text-overflow: ellipsis;

  color: ${(props) =>
    ({
      low: props.$colorset['base.400'],
      medium: props.$colorset['base.400'],
      high: props.$colorset['base.500'],
    }[props.$priority])};

  overflow: hidden;
  white-space: nowrap;
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
    <Container $priority={priority} $colorset={palette[theme]} {...attr}>
      {children}
    </Container>
  );
}
