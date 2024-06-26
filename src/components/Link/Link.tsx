import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../hooks';
import { ColorType, ThemeType } from '../../types';
import { PriorityType } from '../../types';
import { toRem } from '../../utils';
import { Sans } from '../../global';

interface LinkProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  color?: ColorType;
  priority?: PriorityType;
}

const Wrapper = styled(Sans)<{
  $color: ColorType;
  $priority: PriorityType;

  $theme: ThemeType;
}>`
  font-size: ${toRem(14)}rem;
  text-decoration: ${(props) =>
    ({
      low: 'none',
      medium: 'underline',
      high: 'none',
    })[props.$priority]};
  text-decoration-color: ${(props) =>
    ({
      low: props.theme[props.$theme]['base.400'],
      medium: props.theme[props.$theme]['base.400'],
      high: {
        base: props.theme[props.$theme]['base.500'],
        primary: props.theme[props.$theme]['primary.200'],
        danger: props.theme[props.$theme]['danger.200'],
        warning: props.theme[props.$theme]['warning.200'],
      }[props.$color],
    })[props.$priority]};

  color: ${(props) =>
    ({
      low: props.theme[props.$theme]['base.400'],
      medium: props.theme[props.$theme]['base.400'],
      high: {
        base: props.theme[props.$theme]['base.500'],
        primary: props.theme[props.$theme]['primary.200'],
        danger: props.theme[props.$theme]['danger.200'],
        warning: props.theme[props.$theme]['warning.200'],
      }[props.$color],
    })[props.$priority]};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Link({
  children,
  color = 'base',
  priority = 'medium',
  ...attr
}: LinkProps) {
  const { theme } = useTheme();

  return (
    <Wrapper {...attr} $color={color} $priority={priority} $theme={theme}>
      {children}
    </Wrapper>
  );
}
