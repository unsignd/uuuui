import React, { SVGProps } from 'react';
import styled from 'styled-components';
import { toRem } from '../../utils';
import { useTheme } from '../../contexts';
import { PriorityType, ThemeType } from '../../types';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;

  priority?: PriorityType;
}

const Wrapper = styled.div<{
  $priority: PriorityType;

  $theme: ThemeType;
}>`
  height: ${toRem(16)}rem;

  & svg {
    height: ${toRem(16)}rem;

    color: ${(props) =>
      ({
        low: props.theme[props.$theme]['base.400'],
        medium: props.theme[props.$theme]['base.500'],
        high: props.theme[props.$theme]['base.500'],
      }[props.$priority])};

    flex-shrink: 0;
  }
`;

export default function Icon({
  icon: Icon,
  priority = 'medium',
  ...attr
}: IconProps) {
  const { theme } = useTheme();

  return (
    <Wrapper $priority={priority} $theme={theme}>
      <Icon {...attr} />
    </Wrapper>
  );
}
