import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { ColorsetType, PriorityType } from '../../types';
import { toRem } from '../../utils';
import { usePalette, useTheme } from '../../contexts';
import { Sans } from '../../global';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  priority?: PriorityType;
}

const Wrapper = styled(Sans)<{
  $priority: PriorityType;

  $colorset: ColorsetType;
}>`
  color: ${(props) =>
    ({
      low: props.$colorset['base.400'],
      medium: props.$colorset['base.500'],
      high: props.$colorset['base.500'],
    }[props.$priority])};

  font-size: ${toRem(14)}rem;
  font-weight: 400;
`;

export default function Link({
  children,
  priority = 'medium',
  ...attr
}: TextProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Wrapper $priority={priority} $colorset={palette[theme]} {...attr}>
      {children}
    </Wrapper>
  );
}
