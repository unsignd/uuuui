import { ReactNode } from 'react';
import ReactModal from 'styled-react-modal';
import { toRem } from '../../utils';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType } from '../../types';

interface ModalProps {
  children: ReactNode;
}

interface ReactModalProps {
  colorset: ColorsetType;
}

const Container = ReactModal.styled`
  width: ${toRem(480)}rem;

  background-color: ${(props: ReactModalProps) => props.colorset['base.100']};

  border: ${toRem(1)}rem solid ${(props: ReactModalProps) =>
  props.colorset['base.300']};
  border-radius: ${toRem(7)}rem;
`;

export default function Modal({ children }: ModalProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return <Container colorset={palette[theme]}>{children}</Container>;
}
