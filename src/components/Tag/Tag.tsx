import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType, PriorityType } from '../../types';
import { toRem } from '../../utils';

interface TagProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;

  priority?: PriorityType;
}

const Container = styled.p<{
  $priority: PriorityType;

  $colorset: ColorsetType;
}>`
  height: ${toRem(24)}rem;

  margin: 0;
  padding: 0 ${toRem(7)}rem;

  display: flex;
  align-items: center;

  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: ${toRem(12)}rem;
  font-weight: 600;
  text-overflow: ellipsis;
  letter-spacing: ${toRem(-0.35)}rem;

  color: ${(props) =>
    ({
      low: props.$colorset['base.400'],
      medium: props.$colorset['primary.200'],
      high: props.$colorset['base.100'],
    }[props.$priority])};
  background-color: ${(props) =>
    ({
      low: props.$colorset['base.200'],
      medium: props.$colorset['primary.100'],
      high: props.$colorset['base.500'],
    }[props.$priority])};

  border-radius: ${toRem(7)}rem;

  overflow: hidden;
  white-space: nowrap;
`;

export default function Tag({
  children,
  priority = 'medium',
  ...attr
}: TagProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $priority={priority} $colorset={palette[theme]} {...attr}>
      {children}
    </Container>
  );
}
