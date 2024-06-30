import { styled } from 'styled-components';
import Sans from './Sans';
import { ColorType, DropdownType, ThemeType } from '../types';
import { toRem } from '../utils';
import { HTMLAttributes } from 'react';
import { useTheme } from '../contexts';
import { SwitchButton } from '../components';

import { ReactComponent as CheckSVG } from '../assets/check_16.svg';

export interface OptionProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: DropdownType;

  active?: boolean;
  disabled?: boolean;

  color?: ColorType;
}

interface DropdownProps {
  options?: {
    [key: string]: OptionProps;
  };

  onCloseRequest: () => void;
}

interface DropdownItemProps extends OptionProps {
  onCloseRequest: () => void;
}

const Wrapper = styled.div<{
  $theme: ThemeType;
}>`
  width: ${toRem(240)}rem;

  padding: ${toRem(7)}rem 0;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme[props.$theme]['base.100']};

  border: ${toRem(1)}rem solid
    ${(props) => props.theme[props.$theme]['base.300']};
  border-radius: ${toRem(7)}rem;

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const Item = styled.button<{
  $disabled: boolean;

  $type: DropdownType;

  $theme: ThemeType;
}>`
  height: ${toRem(40)}rem;

  padding: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${toRem(14)}rem;

  background-color: transparent;

  border: none;

  transition: background-color 150ms ease-in-out;

  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  cursor: ${(props) =>
    props.$disabled
      ? 'not-allowed'
      : { text: 'pointer', select: 'pointer', 'switch-button': 'auto' }[
          props.$type
        ]};

  &:hover {
    background-color: ${(props) =>
      props.$disabled
        ? undefined
        : {
            text: props.theme[props.$theme]['base.200'],
            select: props.theme[props.$theme]['base.200'],
            'switch-button': undefined,
          }[props.$type]};
  }
`;

const Text = styled(Sans)<{
  $color: ColorType;

  $theme: ThemeType;
}>`
  font-size: ${toRem(14)}rem;

  color: ${(props) =>
    ({
      base: props.theme[props.$theme]['base.500'],
      primary: props.theme[props.$theme]['primary.200'],
      danger: props.theme[props.$theme]['danger.200'],
      warning: props.theme[props.$theme]['warning.200'],
    }[props.$color])};
`;

const UtilityWrapper = styled.div<{
  $theme: ThemeType;
}>`
  flex-shrink: 0;

  & svg {
    color: ${(props) => props.theme[props.$theme]['base.400']};
  }
`;

function DropdownItem({
  text,
  type = 'text',
  active = false,
  disabled = false,
  color = 'base',
  onCloseRequest,
  ...attr
}: DropdownItemProps) {
  const { theme } = useTheme();

  return (
    <Item
      {...attr}
      $disabled={disabled ?? false}
      $type={type ?? 'text'}
      $theme={theme}
      disabled={disabled ?? false}
      tabIndex={-1}
      onClick={(event) => {
        switch (type) {
          case 'text': {
            attr.onClick ? attr.onClick(event) : undefined;

            onCloseRequest();

            break;
          }
          case 'select': {
            attr.onClick ? attr.onClick(event) : undefined;

            onCloseRequest();

            break;
          }
          case 'switch-button':
            undefined;
        }
      }}
    >
      <Text $color={color ?? 'base'} $theme={theme}>
        {text}
      </Text>
      <UtilityWrapper $theme={theme}>
        {
          {
            text: undefined,
            select: <CheckSVG />,
            'switch-button': (
              <SwitchButton
                active={active}
                onClick={(event) => {
                  attr.onClick ? attr.onClick(event) : undefined;
                }}
              />
            ),
          }[type]
        }
      </UtilityWrapper>
    </Item>
  );
}

export default function Dropdown({ options, onCloseRequest }: DropdownProps) {
  const { theme } = useTheme();

  return options ? (
    <Wrapper $theme={theme}>
      {Object.keys(options).map((key) => (
        <DropdownItem
          {...options[key]}
          key={key}
          onCloseRequest={() => onCloseRequest()}
        />
      ))}
    </Wrapper>
  ) : undefined;
}
