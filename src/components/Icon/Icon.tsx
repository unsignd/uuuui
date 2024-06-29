import React, { SVGProps } from 'react';
import styled from 'styled-components';
import { toRem } from '../../utils';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType, PriorityType } from '../../types';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;

  priority?: PriorityType;
}

const Wrapper = styled.div<{
  $priority: PriorityType;

  $colorset: ColorsetType;
}>`
  height: ${toRem(16)}rem;

  & svg {
    height: ${toRem(16)}rem;

    color: ${(props) =>
      ({
        low: props.$colorset['base.400'],
        medium: props.$colorset['base.500'],
        high: props.$colorset['base.500'],
      }[props.$priority])};

    flex-shrink: 0;
  }
`;

export default function Icon({
  icon: Icon,
  priority = 'medium',
  ...attr
}: IconProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Wrapper $priority={priority} $colorset={palette[theme]}>
      <Icon {...attr} />
    </Wrapper>
  );
}
