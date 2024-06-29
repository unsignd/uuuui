import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType, ColorType } from '../../types';
import { toRem } from '../../utils';
import { Mono } from '../../global';

export interface TagProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  color?: ColorType;
}

const Wrapper = styled.div<{
  $color: ColorType;

  $colorset: ColorsetType;
}>`
  height: ${toRem(24)}rem;

  padding: 0 ${toRem(7)}rem;

  display: flex;
  align-items: center;

  color: ${(props) =>
    ({
      base: props.$colorset['base.400'],
      primary: props.$colorset['primary.200'],
      danger: props.$colorset['danger.200'],
    }[props.$color])};
  background-color: ${(props) =>
    ({
      base: props.$colorset['base.200'],
      primary: props.$colorset['primary.100'],
      danger: props.$colorset['danger.100'],
    }[props.$color])};

  border-radius: ${toRem(7)}rem;
`;

const Text = styled(Mono)`
  font-size: ${toRem(14)}rem;
  font-weight: 500;
`;

export default function Tag({ children, color = 'base', ...attr }: TagProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Wrapper $color={color} $colorset={palette[theme]}>
      <Text {...attr}>{children}</Text>
    </Wrapper>
  );
}
