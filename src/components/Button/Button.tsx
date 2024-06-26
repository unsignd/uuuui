import styled from 'styled-components';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { toRem } from '../../utils';
import { PriorityType, BorderCurveType } from '../../types';
import { ColorsetType } from '../../types';
import { usePalette, useTheme } from '../../contexts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  priority?: PriorityType;
  curve?: BorderCurveType;
}

const Wrapper = styled.button<{
  $priority: PriorityType;
  $curve: BorderCurveType;

  $colorset: ColorsetType;
}>`
  height: ${toRem(40)}rem;

  padding: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
  gap: ${toRem(7)}rem;

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
      small: toRem(10),
      large: toRem(20),
    }[props.$curve])}rem;

  transition: scale 100ms ease-in-out;

  cursor: pointer;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  &:hover {
    border: ${(props) =>
      ({
        low: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
        medium: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
        high: 'none',
      }[props.$priority])};

    scale: 1.025;
  }

  &:active {
    scale: 1;
  }

  & svg {
    height: 16px;
  }

  & * {
    color: ${(props) =>
      ({
        low: props.$colorset['base.500'],
        medium: props.$colorset['base.500'],
        high: props.$colorset['base.100'],
      }[props.$priority])};
  }
`;

export default function Button({
  children,
  priority = 'medium',
  curve = 'small',
  ...attr
}: ButtonProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Wrapper
      $priority={priority}
      $curve={curve}
      $colorset={palette[theme]}
      {...attr}
    >
      {children}
    </Wrapper>
  );
}
