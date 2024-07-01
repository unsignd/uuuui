import styled from 'styled-components';
import { ColorType, ThemeType } from '../../types';
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

  color?: ColorType;
}

const Wrapper = styled(Tippy)``;

const TooltipWrapper = styled.div<{
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $text?: string;

  $open?: boolean;

  $color: ColorType;

  $theme: ThemeType;
}>`
  width: ${(props) =>
    !props.$text && props.$icon ? `${toRem(28)}rem` : 'auto'};
  height: ${toRem(28)}rem;

  padding: 0 ${(props) => (!props.$text && props.$icon ? 0 : toRem(7))}rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(3.5)}rem;

  color: ${(props) =>
    ({
      base: props.theme[props.$theme]['base.400'],
      primary: props.theme[props.$theme]['primary.200'],
      danger: props.theme[props.$theme]['danger.200'],
      warning: props.theme[props.$theme]['warning.200'],
    })[props.$color]};
  background-color: ${(props) =>
    ({
      base: props.theme[props.$theme]['base.200'],
      primary: props.theme[props.$theme]['primary.100'],
      danger: props.theme[props.$theme]['danger.100'],
      warning: props.theme[props.$theme]['warning.100'],
    })[props.$color]};

  border-radius: ${toRem(7)}rem;

  transition:
    transform 100ms ease-in-out,
    opacity 150ms ease-in-out;

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
  color = 'base',
}: TooltipProps) {
  const [open, setOpen] = useState<boolean>(false);

  const { theme } = useTheme();

  return (
    <Wrapper
      offset={[0, 7]}
      interactive={true}
      disabled={disabled}
      render={() => (
        <TooltipWrapper
          $icon={Icon}
          $text={text}
          $open={open}
          $color={color}
          $theme={theme}
        >
          {Icon ? <Icon /> : undefined}
          {text ? <Text>{text}</Text> : undefined}
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
