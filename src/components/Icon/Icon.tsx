import React, { SVGProps } from 'react';
import styled from 'styled-components';
import { toRem } from '../../utils';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType } from '../../types';

export interface IconProps extends SVGProps<SVGSVGElement> {
  children?: undefined;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Container = styled.div<{
  $colorset: ColorsetType;
}>`
  height: ${toRem(16)}rem;

  & svg {
    height: ${toRem(16)}rem;

    color: ${(props) => props.$colorset['base.500']};

    flex-shrink: 0;
  }
`;

export default function Icon({ icon: Icon, ...attr }: IconProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $colorset={palette[theme]}>
      <Icon {...attr} />
    </Container>
  );
}
