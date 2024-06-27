import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { toRem } from '../../utils';
import { PriorityType, BorderCurveType } from '../../types';
import { ColorsetType } from '../../types';
import { usePalette, useTheme } from '../../contexts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  priority?: PriorityType;
  curve?: BorderCurveType;
}

const Container = styled.button<{
  $children?: string;
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $priority: PriorityType;
  $curve: BorderCurveType;

  $colorset: ColorsetType;
}>`
  width: ${(props) =>
    !props.$children && props.$icon ? `${toRem(40)}rem` : 'auto'};
  height: ${toRem(40)}rem;

  padding: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(7)}rem;

  font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: ${toRem(14)}rem;

  color: ${(props) =>
    ({
      low: props.$colorset['base.500'],
      medium: props.$colorset['base.500'],
      high: props.$colorset['base.100'],
    }[props.$priority])};
  background-color: ${(props) =>
    ({
      low: props.$colorset['base.100'],
      medium: props.$colorset['base.100'],
      high: props.$colorset['base.500'],
    }[props.$priority])};

  border: ${(props) =>
    ({
      low: 'none',
      medium: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
      high: 'none',
    }[props.$priority])};
  border-radius: ${(props) =>
    ({
      medium: toRem(10),
      large: toRem(20),
    }[props.$curve])}rem;

  transition: scale 100ms ease-in-out;

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border: ${(props) =>
      ({
        low: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
        medium: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
        high: 'none',
      }[props.$priority])};

    scale: 1.04;
  }

  &:active {
    scale: 1;
  }

  & svg {
    height: ${toRem(16)}rem;

    flex-shrink: 0;
  }
`;

export default function Button({
  children,
  icon: Icon,
  priority = 'medium',
  curve = 'medium',
  ...attr
}: ButtonProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container
      $children={children}
      $icon={Icon}
      $priority={priority}
      $curve={curve}
      $colorset={palette[theme]}
      {...attr}
    >
      {Icon ? <Icon /> : undefined}
      {children}
    </Container>
  );
}
