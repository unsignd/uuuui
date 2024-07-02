import { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Popover } from 'react-tiny-popover';
import { Dropdown, Sans } from '../../global';
import {
  BorderCurveType,
  ColorType,
  DropdownType,
  PriorityType,
  ThemeType,
} from '../../types';
import { useTheme } from '../../hooks';
import { toRem } from '../../utils';

import { ReactComponent as ArrowDownSVG } from '../../assets/arrow_down_8.svg';
import { OptionProps } from '../../global/Dropdown';

interface MenuOptionProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: DropdownType;

  disabled?: boolean;

  color?: ColorType;
}

interface MenuProps extends HTMLAttributes<HTMLButtonElement> {
  options: {
    [key: string]: MenuOptionProps;
  };

  selection?: string;

  disabled?: boolean;

  priority?: PriorityType;
  curve?: BorderCurveType;
}

const Wrapper = styled.div``;

const ButtonWrapper = styled.button<{
  $active: boolean;
  $disabled: boolean;

  $priority: PriorityType;
  $curve: BorderCurveType;

  $theme: ThemeType;
}>`
  width: ${toRem(160)}rem;
  height: ${toRem(40)}rem;

  padding: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${toRem(7)}rem;

  background-color: ${(props) =>
    ({
      low: props.$active
        ? props.theme[props.$theme]['base.200']
        : props.theme[props.$theme]['base.100'],
      medium: props.$active
        ? props.theme[props.$theme]['base.200']
        : props.theme[props.$theme]['base.100'],
      high: props.theme[props.$theme]['base.500'],
    })[props.$priority]};

  border: ${(props) =>
    ({
      low: 'none',
      medium: `${toRem(1)}rem solid ${props.theme[props.$theme]['base.300']}`,
      high: 'none',
    })[props.$priority]};
  border-radius: ${(props) =>
    ({
      medium: toRem(10),
      large: toRem(20),
    })[props.$curve]}rem;

  transition:
    scale 100ms ease-in-out,
    background-color 150ms ease-in-out;

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.$disabled
        ? undefined
        : {
            low: props.theme[props.$theme]['base.200'],
            medium: props.theme[props.$theme]['base.200'],
            high: undefined,
          }[props.$priority]};
  }

  &:active {
    scale: ${(props) => (props.$disabled ? undefined : 0.96)};
  }

  & svg {
    color: ${(props) =>
      ({
        low: props.theme[props.$theme]['base.400'],
        medium: props.theme[props.$theme]['base.400'],
        high: props.theme[props.$theme]['base.100'],
      })[props.$priority]};

    flex-shrink: 0;
  }
`;

const Text = styled(Sans)<{
  $priority: PriorityType;

  $theme: ThemeType;
}>`
  font-size: ${toRem(14)}rem;

  color: ${(props) =>
    ({
      low: props.theme[props.$theme]['base.500'],
      medium: props.theme[props.$theme]['base.500'],
      high: props.theme[props.$theme]['base.100'],
    })[props.$priority]};
`;

const DropdownWrapper = styled.div<{
  $open: boolean;
}>`
  transition:
    transform 100ms ease-in-out,
    opacity 150ms ease-in-out;

  transform: translateY(${(props) => (props.$open ? 0 : toRem(-7))}rem);
  opacity: ${(props) => (props.$open ? 1 : 0)};
`;

export default function Menu({
  options,
  selection = Object.keys(options)[0],
  disabled = false,
  priority = 'medium',
  curve = 'medium',
  ...attr
}: MenuProps) {
  const [active, setActive] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const { theme } = useTheme();

  return (
    <Popover
      isOpen={active}
      positions={['bottom']}
      align={'start'}
      padding={7}
      onClickOutside={() => {
        setOpen(false);

        setTimeout(() => {
          setActive(false);
        }, 150);
      }}
      content={
        <DropdownWrapper $open={open}>
          <Dropdown
            options={{
              ...Object.keys(options).reduce(
                (acc, key) => {
                  acc[key] = {
                    ...options[key],
                    type: key === selection ? 'select' : 'text',
                  };
                  return acc;
                },
                {} as { [key: string]: OptionProps }
              ),
            }}
            onCloseRequest={() => {
              setOpen(false);

              setTimeout(() => {
                setActive(false);
              }, 150);
            }}
          />
        </DropdownWrapper>
      }
    >
      <Wrapper>
        <ButtonWrapper
          {...attr}
          $active={active}
          $disabled={disabled}
          $priority={priority}
          $curve={curve}
          $theme={theme}
          onClick={(event) => {
            if (attr.onClick && typeof attr.onClick === 'function') {
              attr.onClick(event);
            }

            if (active) {
              setOpen(false);

              setTimeout(() => {
                setActive(false);
              }, 150);
            } else {
              setActive(true);

              setTimeout(() => {
                setOpen(true);
              }, 10);
            }
          }}
          disabled={disabled}
          tabIndex={-1}
        >
          <Text $priority={priority} $theme={theme}>
            {options[selection].text}
          </Text>
          <ArrowDownSVG />
        </ButtonWrapper>
      </Wrapper>
    </Popover>
  );
}
