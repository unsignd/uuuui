import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ColorsetType, PriorityType } from '../../types';
import { toRem } from '../../utils';
import { usePalette, useTheme } from '../../contexts';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;

  priority?: PriorityType;
}

const Container = styled.p<{
  $priority: PriorityType;

  $colorset: ColorsetType;
}>`
  margin: 0;

  color: ${(props) =>
    ({
      low: props.$colorset['base.400'],
      medium: props.$colorset['base.400'],
      high: props.$colorset['base.500'],
    }[props.$priority])};

  font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: ${toRem(14)}rem;
  text-overflow: ellipsis;

  overflow: hidden;
  white-space: nowrap;
`;

export default function Link({
  children,
  priority = 'medium',
  ...attr
}: TextProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $priority={priority} $colorset={palette[theme]} {...attr}>
      {children}
    </Container>
  );
}
