import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType, ColorType } from '../../types';
import { toRem } from '../../utils';

interface TagProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;

  color?: ColorType;
}

const Container = styled.p<{
  $color: ColorType;

  $colorset: ColorsetType;
}>`
  height: ${toRem(24)}rem;

  margin: 0;
  padding: 0 ${toRem(7)}rem;

  display: flex;
  align-items: center;

  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: ${toRem(14)}rem;
  font-weight: 500;
  text-overflow: ellipsis;
  letter-spacing: ${toRem(-0.35)}rem;

  color: ${(props) =>
    ({
      base: props.$colorset['base.400'],
      primary: props.$colorset['primary.200'],
    }[props.$color])};
  background-color: ${(props) =>
    ({
      base: props.$colorset['base.200'],
      primary: props.$colorset['primary.100'],
    }[props.$color])};

  border-radius: ${toRem(7)}rem;

  overflow: hidden;
  white-space: nowrap;
`;

export default function Tag({ children, color = 'base', ...attr }: TagProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $color={color} $colorset={palette[theme]} {...attr}>
      {children}
    </Container>
  );
}
