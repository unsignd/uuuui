import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { ColorType, PriorityType, ThemeType } from '../../types';
import { toRem } from '../../utils';
import { useTheme } from '../../contexts';
import { Sans } from '../../global';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  color?: ColorType;
  priority?: PriorityType;
}

const Wrapper = styled(Sans)<{
  $color: ColorType;
  $priority: PriorityType;

  $theme: ThemeType;
}>`
  color: ${(props) =>
    ({
      low: props.theme[props.$theme]['base.400'],
      medium: {
        base: props.theme[props.$theme]['base.500'],
        primary: props.theme[props.$theme]['primary.200'],
        danger: props.theme[props.$theme]['danger.200'],
      }[props.$color],
      high: {
        base: props.theme[props.$theme]['base.500'],
        primary: props.theme[props.$theme]['primary.200'],
        danger: props.theme[props.$theme]['danger.200'],
      }[props.$color],
    }[props.$priority])};

  font-size: ${toRem(14)}rem;
  font-weight: 400;
`;

export default function Link({
  children,
  color = 'base',
  priority = 'medium',
  ...attr
}: TextProps) {
  const { theme } = useTheme();

  return (
    <Wrapper $color={color} $priority={priority} $theme={theme} {...attr}>
      {children}
    </Wrapper>
  );
}
