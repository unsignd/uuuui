import React, { SVGProps } from 'react';
import styled from 'styled-components';
import { toRem } from '../../utils';
import { useTheme } from '../../contexts';
import { ColorType, PriorityType, ThemeType } from '../../types';

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;

  color?: ColorType;
  priority?: PriorityType;
}

const Wrapper = styled.div<{
  $color: ColorType;
  $priority: PriorityType;

  $theme: ThemeType;
}>`
  height: ${toRem(16)}rem;

  & svg {
    height: ${toRem(16)}rem;

    color: ${(props) =>
      ({
        low: props.theme[props.$theme]['base.400'],
        medium: {
          base: props.theme[props.$theme]['base.500'],
          primary: props.theme[props.$theme]['primary.200'],
          danger: props.theme[props.$theme]['danger.200'],
          warning: props.theme[props.$theme]['warning.200'],
        }[props.$color],
        high: {
          base: props.theme[props.$theme]['base.500'],
          primary: props.theme[props.$theme]['primary.200'],
          danger: props.theme[props.$theme]['danger.200'],
          warning: props.theme[props.$theme]['warning.200'],
        }[props.$color],
      }[props.$priority])};

    flex-shrink: 0;
  }
`;

export default function Icon({
  icon: Icon,
  color = 'base',
  priority = 'medium',
  ...attr
}: IconProps) {
  const { theme } = useTheme();

  return (
    <Wrapper $color={color} $priority={priority} $theme={theme}>
      <Icon {...attr} />
    </Wrapper>
  );
}
