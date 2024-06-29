import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts';
import { ColorType, ThemeType } from '../../types';
import { toRem } from '../../utils';
import { Mono } from '../../global';

export interface TagProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  color?: ColorType;
}

const Wrapper = styled.div<{
  $children?: ReactNode;
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $color: ColorType;

  $theme: ThemeType;
}>`
  width: ${(props) =>
    !props.$children && props.$icon ? `${toRem(24)}rem` : 'auto'};
  height: ${toRem(24)}rem;

  padding: 0 ${toRem(7)}rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(7)}rem;

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

  & svg {
    height: ${toRem(16)}rem;

    flex-shrink: 0;
  }
`;

const Text = styled(Mono)`
  font-size: ${toRem(14)}rem;
  font-weight: 600;
`;

export default function Tag({
  children,
  icon: Icon,
  color = 'base',
  ...attr
}: TagProps) {
  const { theme } = useTheme();

  return (
    <Wrapper $children={children} $icon={Icon} $color={color} $theme={theme}>
      {Icon ? <Icon /> : undefined}
      {children ? <Text {...attr}>{children}</Text> : undefined}
    </Wrapper>
  );
}
