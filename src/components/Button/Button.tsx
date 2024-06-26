import styled from 'styled-components';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { toRem } from '../../utils';
import { BorderType, CurveType } from '../../types/style';
import { ColorsetType } from '../../types/theme';
import { usePalette, useTheme } from '../../contexts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  border?: BorderType;
  curve?: CurveType;
}

const Wrapper = styled.button<{
  $border: BorderType;
  $curve: CurveType;

  $colorset: ColorsetType;
}>`
  height: ${toRem(40)}rem;

  padding: 0
    ${(props) =>
      ({
        visible: toRem(13),
        on_hover: toRem(14),
        invisible: toRem(14),
      }[props.$border])}rem;

  color: ${(props) =>
    ({
      visible: props.$colorset['base.500'],
      on_hover: props.$colorset['base.500'],
      invisible: props.$colorset['base.100'],
    }[props.$border])};
  background-color: ${(props) =>
    ({
      visible: props.$colorset['base.100'],
      on_hover: props.$colorset['base.100'],
      invisible: props.$colorset['base.500'],
    }[props.$border])};

  border: ${(props) =>
    ({
      visible: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
      on_hover: 'none',
      invisible: 'none',
    }[props.$border])};
  border-radius: ${(props) =>
    ({
      normal: toRem(10),
      full: toRem(20),
    }[props.$curve])}rem;

  transition: scale 100ms ease-in-out;

  cursor: pointer;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  &:hover {
    padding: 0
      ${(props) =>
        ({
          visible: toRem(13),
          on_hover: toRem(13),
          invisible: toRem(14),
        }[props.$border])}rem;

    border: ${(props) =>
      ({
        visible: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
        on_hover: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
        invisible: 'none',
      }[props.$border])};

    scale: 1.025;
  }

  &:active {
    scale: 1;
  }
`;

export default function Button({
  children,
  border = 'invisible',
  curve = 'normal',
  ...attr
}: ButtonProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Wrapper
      $border={border}
      $curve={curve}
      $colorset={palette[theme]}
      {...attr}
    >
      {children}
    </Wrapper>
  );
}
