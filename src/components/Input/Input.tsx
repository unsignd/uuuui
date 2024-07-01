import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { BorderCurveType, ThemeType } from '../../types';
import { useTheme } from '../../contexts';
import { toRem } from '../../utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  disabled?: boolean;

  curve?: BorderCurveType;
}

const Wrapper = styled.div<{
  $disabled: boolean;

  $curve: BorderCurveType;

  $theme: ThemeType;
}>`
  width: ${toRem(240)}rem;
  height: ${toRem(40)}rem;

  padding-left: ${toRem(14)}rem;

  display: flex;
  align-items: center;
  gap: ${toRem(7)}rem;

  background-color: ${(props) => props.theme[props.$theme]['base.100']};

  border: ${toRem(1)}rem solid
    ${(props) => props.theme[props.$theme]['base.300']};
  border-radius: ${(props) =>
    ({
      medium: toRem(10),
      large: toRem(20),
    })[props.$curve]}rem;

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'auto')};

  & svg {
    height: ${toRem(16)}rem;

    flex-shrink: 0;

    color: ${(props) => props.theme[props.$theme]['base.400']};
  }
`;

const InputField = styled.input<{
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $disabled: boolean;

  $theme: ThemeType;
}>`
  width: 100%;
  height: ${toRem(40)}rem;

  padding: 0 ${toRem(14)}rem 0 ${(props) => (props.$icon ? toRem(7) : 0)}rem;

  font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: ${toRem(14)}rem;

  color: ${(props) => props.theme[props.$theme]['base.500']};
  background-color: transparent;

  border: none;

  outline: none;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'auto')};

  &::placeholder {
    color: ${(props) => props.theme[props.$theme]['base.400']};
  }
`;

export default function Input({
  icon: Icon,
  disabled = false,
  curve = 'medium',
  ...attr
}: InputProps) {
  const { theme } = useTheme();

  return (
    <Wrapper
      $disabled={disabled}
      $curve={curve}
      $theme={theme}
      style={{
        ...attr.style,
      }}
    >
      {Icon ? <Icon /> : undefined}
      <InputField
        {...attr}
        $icon={Icon}
        $disabled={disabled}
        $theme={theme}
        tabIndex={-1}
        disabled={disabled}
        style={{}}
      />
    </Wrapper>
  );
}
