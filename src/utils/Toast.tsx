import rht from 'react-hot-toast';
import { ColorType, ThemeType } from '../types';
import styled from 'styled-components';
import { Sans } from '../global';
import { usePalette, useTheme } from '../contexts';
import { toRem } from '.';

interface ToastProps {
  text: string;
  color?: ColorType;
}

const Text = styled(Sans)<{
  $color: ColorType;

  $theme: ThemeType;
}>`
  color: ${(props) => props.theme[props.$theme]['base.100']};

  font-size: ${toRem(14)}rem;
`;

export default function toast({ text, color = 'base' }: ToastProps) {
  const { theme } = useTheme();

  rht(() => (
    <Text $color={color} $theme={theme}>
      {text}
    </Text>
  ));
}
