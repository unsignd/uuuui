import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts';
import { ColorType, ThemeType } from '../../types';
import { toRem } from '../../utils';
import { Mono } from '../../global';

export interface TagProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  color?: ColorType;
}

const Wrapper = styled.div<{
  $color: ColorType;

  $theme: ThemeType;
}>`
  height: ${toRem(24)}rem;

  padding: 0 ${toRem(7)}rem;

  display: flex;
  align-items: center;

  color: ${(props) =>
    ({
      base: props.theme[props.$theme]['base.400'],
      primary: props.theme[props.$theme]['primary.200'],
      danger: props.theme[props.$theme]['danger.200'],
    }[props.$color])};
  background-color: ${(props) =>
    ({
      base: props.theme[props.$theme]['base.200'],
      primary: props.theme[props.$theme]['primary.100'],
      danger: props.theme[props.$theme]['danger.100'],
    }[props.$color])};

  border-radius: ${toRem(7)}rem;
`;

const Text = styled(Mono)`
  font-size: ${toRem(14)}rem;
  font-weight: 600;
`;

export default function Tag({ children, color = 'base', ...attr }: TagProps) {
  const { theme } = useTheme();

  return (
    <Wrapper $color={color} $theme={theme}>
      <Text {...attr}>{children}</Text>
    </Wrapper>
  );
}
