import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../contexts';
import { ThemeType } from '../../types';
import { toRem } from '../../utils';

interface SwitchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  disabled?: boolean;
}

const Wrapper = styled.button<{
  $active: boolean;
  $disabled: boolean;

  $theme: ThemeType;
}>`
  width: ${toRem(36)}rem;
  height: ${toRem(24)}rem;

  padding: 0 ${toRem(2)}rem;

  display: flex;
  align-items: center;

  background-color: ${(props) =>
    ({
      light: props.$active
        ? props.theme[props.$theme]['base.500']
        : props.theme[props.$theme]['base.300'],
      dark: props.$active
        ? props.theme[props.$theme]['primary.200']
        : props.theme[props.$theme]['base.100'],
    }[props.$theme])};

  border: ${(props) =>
    ({
      light: 'none',
      dark: props.$active
        ? 'none'
        : `${toRem(1)}rem solid ${props.theme[props.$theme]['base.300']}`,
    }[props.$theme])};
  border-radius: ${toRem(12)}rem;

  transition: background-color 150ms ease-in-out;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

const Circle = styled.div<{
  $active: boolean;

  $theme: ThemeType;
}>`
  width: ${toRem(20)}rem;
  height: ${toRem(20)}rem;

  margin-left: ${(props) => (props.$active ? toRem(12) : 0)}rem;

  background-color: ${(props) =>
    ({
      light: props.theme[props.$theme]['base.100'],
      dark: props.theme[props.$theme]['base.500'],
    }[props.$theme])};

  border-radius: ${toRem(10)}rem;

  transition: margin-left 100ms ease-in-out;
`;

export default function SwitchButtonProps({
  active = false,
  disabled = false,
  ...attr
}: SwitchButtonProps) {
  const { theme } = useTheme();

  return (
    <Wrapper
      {...attr}
      $active={active}
      $disabled={disabled}
      $theme={theme}
      disabled={disabled}
      tabIndex={-1}
    >
      <Circle $active={active} $theme={theme} />
    </Wrapper>
  );
}
