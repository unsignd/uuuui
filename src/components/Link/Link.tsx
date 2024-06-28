import { AnchorHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType } from '../../types';
import { PriorityType } from '../../types';
import { Link as _Link } from 'react-router-dom';
import { toRem } from '../../utils';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;

  priority?: PriorityType;
}

const Container = styled.a<{
  $priority: PriorityType;

  $colorset: ColorsetType;
}>`
  display: flex;
  align-items: center;
  gap: ${toRem(7)}rem;

  font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: ${toRem(14)}rem;
  text-decoration: none;
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

const Text = styled.p`
  margin: 0;

  text-overflow: ellipsis;

  overflow: hidden;
  white-space: nowrap;
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
      <Text>{children}</Text>
    </Container>
  );
}
