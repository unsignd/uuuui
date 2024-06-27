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

  padding: 0 ${toRem(14)}rem;

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

  & svg {
    height: 16px;
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
    </Container>
  );
}
