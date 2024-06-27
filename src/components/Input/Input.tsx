import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';
import { BorderCurveType, ColorsetType } from '../../types';
import { usePalette, useTheme } from '../../contexts';
import { toRem } from '../../utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  curve?: BorderCurveType;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Container = styled.div<{
  $curve: BorderCurveType;

  $colorset: ColorsetType;
}>`
  height: ${toRem(40)}rem;

  padding-left: ${toRem(14)}rem;

  display: flex;
  align-items: center;
  gap: ${toRem(7)}rem;

  background-color: ${(props) => props.$colorset['base.100']};

  border: ${toRem(1)}rem solid ${(props) => props.$colorset['base.300']};
  border-radius: ${(props) =>
    ({
      small: toRem(10),
      large: toRem(20),
    }[props.$curve])}rem;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  & svg {
    height: ${toRem(16)}rem;

    flex-shrink: 0;

    color: ${(props) => props.$colorset['base.400']};
  }

  & * {
    margin: 0;
    padding: 0;
  }
`;

const InputField = styled.input<{
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $colorset: ColorsetType;
}>`
  height: ${toRem(40)}rem;

  padding: 0 ${toRem(14)}rem 0 ${(props) => (props.$icon ? toRem(7) : 0)}rem;

  font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: ${toRem(14)}rem;

  color: ${(props) => props.$colorset['base.500']};
  background-color: transparent;

  border: none;

  outline: none;
  overflow: hidden;

  ::placeholder {
    color: ${(props) => props.$colorset['base.400']};
  }
`;

export default function Input({
  curve = 'small',
  icon: Icon,
  ...attr
}: InputProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $curve={curve} $colorset={palette[theme]}>
      {Icon ? <Icon /> : undefined}
      <InputField $colorset={palette[theme]} {...attr} />
    </Container>
  );
}
