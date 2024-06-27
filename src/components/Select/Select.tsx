import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { BorderCurveType, ColorsetType, PriorityType } from '../../types';
import { usePalette, useTheme } from '../../contexts';
import { toRem } from '../../utils';

import { ReactComponent as ArrowDownSVG } from '../../assets/arrow_down_8.svg';

interface SelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: undefined;
  options: {
    [key: string | number]: {
      name: string;
      onClick: () => void;
    };
  };

  defaultOption: string | number;

  priority?: PriorityType;
  curve?: BorderCurveType;
}

const Container = styled.button<{
  $priority: PriorityType;
  $curve: BorderCurveType;

  $colorset: ColorsetType;
}>`
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
      low: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
      medium: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
      high: 'none',
    }[props.$priority])};
  border-radius: ${(props) =>
    ({
      medium: toRem(10),
      large: toRem(20),
    }[props.$curve])}rem;

  transition: scale 100ms ease-in-out;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor: pointer;

  &:hover {
    scale: 1.04;
  }

  &:active {
    scale: 1;
  }

  & svg {
    color: ${(props) =>
      ({
        low: props.$colorset['base.400'],
        medium: props.$colorset['base.400'],
        high: props.$colorset['base.100'],
      }[props.$priority])};

    flex-shrink: 0;
  }
`;

const Text = styled.p`
  margin: 0;

  text-overflow: ellipsis;

  overflow: hidden;
  white-space: nowrap;
`;

export default function Select({
  options,
  defaultOption,
  priority = 'medium',
  curve = 'medium',
  ...attr
}: SelectProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container
      $priority={priority}
      $curve={curve}
      $colorset={palette[theme]}
      {...attr}
    >
      <Text>{options[defaultOption].name}</Text>
      <ArrowDownSVG />
    </Container>
  );
}
