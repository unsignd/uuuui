import { ReactNode, useState } from 'react';
import ReactModal from 'styled-react-modal';
import { toRem } from '../../utils';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType, ThemeType } from '../../types';
import styled from 'styled-components';
import Text from '../../components/Text';

import { ReactComponent as XSVG } from '../../assets/x_14.svg';

interface ModalProps {
  children: ReactNode;

  title: string;
  active?: boolean;

  width?: number;

  onCloseRequest?: () => void;
}

interface ReactModalProps {
  $scale: number;
  $width: number;

  $colorset: ColorsetType;
}

const Wrapper = ReactModal.styled`
  width: ${(props: ReactModalProps) => toRem(props.$width)}rem;

  scale: ${(props: ReactModalProps) => props.$scale};

  background-color: ${(props: ReactModalProps) => props.$colorset['base.100']};

  border: ${toRem(1)}rem solid ${(props: ReactModalProps) =>
  props.$colorset['base.300']};
  border-radius: ${toRem(7)}rem;

  transition: scale 100ms ease-in-out;

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const Header = styled.div<{
  $theme: ThemeType;
}>`
  height: ${toRem(40)}rem;

  padding: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${toRem(14)}rem;

  background-color: ${(props) => props.theme[props.$theme]['base.200']};

  border-bottom: ${toRem(1)}rem solid
    ${(props) => props.theme[props.$theme]['base.300']};

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  & svg {
    color: ${(props) => props.theme[props.$theme]['base.400']};

    flex-shrink: 0;
    cursor: pointer;
  }
`;

const Body = styled.div`
  padding: ${toRem(14)}rem;

  position: relative;
`;

export default function Modal({
  children,
  title,
  active = false,
  onCloseRequest,
  width = 480,
}: ModalProps) {
  const [opacity, setOpacity] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.2);

  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Wrapper
      $scale={scale}
      $width={width}
      $colorset={palette[theme]}
      backgroundProps={{ $opacity: opacity }}
      isOpen={active}
      afterOpen={() => {
        setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 10);
      }}
      beforeClose={() =>
        new Promise((resolve) => {
          setOpacity(0);
          setScale(1.2);
          setTimeout(resolve, 150);
        })
      }
      onBackgroundClick={() => (onCloseRequest ? onCloseRequest() : undefined)}
      onEscapeKeydown={() => (onCloseRequest ? onCloseRequest() : undefined)}
    >
      <Header $theme={theme}>
        <Text priority={'low'}>{title}</Text>
        <XSVG onClick={() => (onCloseRequest ? onCloseRequest() : undefined)} />
      </Header>
      <Body>{children}</Body>
    </Wrapper>
  );
}
