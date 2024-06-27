import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { BorderCurveType, ColorsetType } from '../../types';
import { usePalette, useTheme } from '../../contexts';
import { toRem } from '../../utils';

import { ReactComponent as ArrowDownSVG } from '../../assets/arrow_down_8.svg';

interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: undefined;
  options: {
    [key: string | number]: {
      name: string;
      onClick: () => void;
    };
  };

  defaultOption: string | number;

  curve?: BorderCurveType;
}

const Container = styled.button<{
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

  color: ${(props) => props.$colorset['base.500']};
  background-color: ${(props) => props.$colorset['base.100']};

  border: ${toRem(1)}rem solid ${(props) => props.$colorset['base.300']};
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
    scale: 1.04;
  }

  &:active {
    scale: 1;
  }

  & svg {
    color: ${(props) => props.$colorset['base.400']};

    flex-shrink: 0;
  }
`;

export default function Dropdown({
  options,
  defaultOption,
  curve = 'medium',
  ...attr
}: DropdownProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $curve={curve} $colorset={palette[theme]} {...attr}>
      {options[defaultOption].name}
      <ArrowDownSVG />
    </Container>
  );
}
