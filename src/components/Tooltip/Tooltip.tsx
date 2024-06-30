import styled from 'styled-components';
import { ThemeType } from '../../types';
import { useTheme } from '../../contexts';
import { ReactElement, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { toRem } from '../../utils';
import { Sans } from '../../global';

interface TooltipProps {
  children: ReactElement;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  text: string;

  disabled?: boolean;
}

const Wrapper = styled(Tippy)``;

const TooltipWrapper = styled.div<{
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $open?: boolean;

  $theme: ThemeType;
}>`
  height: ${toRem(28)}rem;

  padding: 0 ${toRem(7)}rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(7)}rem;

  color: ${(props) => props.theme[props.$theme]['base.100']};
  background-color: ${(props) => props.theme[props.$theme]['base.500']};

  border-radius: ${toRem(7)}rem;

  transition: transform 100ms ease-in-out, opacity 150ms ease-in-out;

  transform: ${(props) =>
    props.$open ? 'translateY(0)' : `translateY(${toRem(7)}rem)`};
  opacity: ${(props) => (props.$open ? 1 : 0)};

  & svg {
    height: ${toRem(16)}rem;

    flex-shrink: 0;
  }
`;

const Text = styled(Sans)`
  font-size: ${toRem(14)}rem;
  font-weight: 400;
`;

const ChildrenWrapper = styled.div``;

export default function Tooltip({
  children,
  icon: Icon,
  text,
  disabled = false,
}: TooltipProps) {
  const [open, setOpen] = useState<boolean>(false);

  const { theme } = useTheme();

  return (
    <Wrapper
      offset={[0, 7]}
      interactive={true}
      disabled={disabled}
      render={() => (
        <TooltipWrapper $icon={Icon} $open={open} $theme={theme}>
          {Icon ? <Icon /> : undefined}
          <Text>{text}</Text>
        </TooltipWrapper>
      )}
      animation={true}
      onMount={() => {
        setTimeout(() => {
          setOpen(true);
        }, 10);
      }}
      onHide={() => {
        setOpen(false);
      }}
    >
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
}