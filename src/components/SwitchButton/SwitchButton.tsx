import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType, ThemeType } from '../../types';
import { toRem } from '../../utils';

export interface SwitchButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: undefined;

  active?: boolean;
  disabled?: boolean;
}

const Container = styled.button<{
  $active: boolean;
  $disabled: boolean;

  $theme: ThemeType;
  $colorset: ColorsetType;
}>`
  width: ${toRem(36)}rem;
  height: ${toRem(24)}rem;

  padding: 0 ${toRem(2)}rem;

  display: flex;
  align-items: center;

  background-color: ${(props) =>
    ({
      light: props.$active
        ? props.$colorset['base.500']
        : props.$colorset['base.300'],
      dark: props.$active
        ? props.$colorset['primary.200']
        : props.$colorset['base.100'],
    }[props.$theme])};

  border: ${(props) =>
    ({
      light: 'none',
      dark: props.$active
        ? 'none'
        : `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
    }[props.$theme])};
  border-radius: ${toRem(12)}rem;

  transition: background-color 100ms ease-in-out;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

const Circle = styled.div<{
  $active: boolean;

  $theme: ThemeType;
  $colorset: ColorsetType;
}>`
  width: ${toRem(20)}rem;
  height: ${toRem(20)}rem;

  margin-left: ${(props) => (props.$active ? toRem(12) : 0)}rem;

  background-color: ${(props) =>
    ({
      light: props.$colorset['base.100'],
      dark: props.$colorset['base.500'],
    }[props.$theme])};

  border-radius: ${toRem(10)}rem;

  transition: margin-left 100ms ease-in-out;
`;

export default function SwitchButtonProps({
  active = false,
  disabled = false,
  ...attr
}: SwitchButtonProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container
      $active={active}
      $disabled={disabled}
      $theme={theme}
      $colorset={palette[theme]}
      disabled={disabled}
      tabIndex={-1}
      {...attr}
    >
      <Circle $active={active} $theme={theme} $colorset={palette[theme]} />
    </Container>
  );
}
