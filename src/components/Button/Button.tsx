import { HTMLAttributes, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { toRem } from '../../utils';
import {
  PriorityType,
  BorderCurveType,
  DropdownType,
  ColorType,
  ThemeType,
} from '../../types';
import { useTheme } from '../../contexts';
import { Popover } from 'react-tiny-popover';
import SwitchButton from '../SwitchButton';
import { Sans } from '../../global';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  options?: {
    [key: string]: {
      name: string;
      type?: DropdownType;
      color?: ColorType;
      active?: boolean;
      disabled?: boolean;
      onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => void;
    };
  };

  disabled?: boolean;

  color?: ColorType;
  priority?: PriorityType;
  curve?: BorderCurveType;
}

const Wrapper = styled.div``;

const ButtonContainer = styled.button<{
  $children?: ReactNode;
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $active?: boolean;
  $disabled: boolean;

  $color: ColorType;
  $priority: PriorityType;
  $curve: BorderCurveType;

  $theme: ThemeType;
}>`
  width: ${(props) =>
    !props.$children && props.$icon ? `${toRem(40)}rem` : 'auto'};
  height: ${toRem(40)}rem;

  padding: 0 ${(props) => (!props.$children && props.$icon ? 0 : toRem(14))}rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(7)}rem;

  color: ${(props) =>
    ({
      low: props.theme[props.$theme]['base.500'],
      medium: props.theme[props.$theme]['base.500'],
      high: {
        base: props.theme[props.$theme]['base.100'],
        primary: {
          light: props.theme[props.$theme]['base.100'],
          dark: props.theme[props.$theme]['base.500'],
        }[props.$theme],
        danger: {
          light: props.theme[props.$theme]['base.100'],
          dark: props.theme[props.$theme]['base.500'],
        }[props.$theme],
      }[props.$color],
    }[props.$priority])};
  background-color: ${(props) =>
    ({
      low: props.$active
        ? props.theme[props.$theme]['base.200']
        : props.theme[props.$theme]['base.100'],
      medium: props.$active
        ? props.theme[props.$theme]['base.200']
        : props.theme[props.$theme]['base.100'],
      high: {
        base: props.theme[props.$theme]['base.500'],
        primary: props.theme[props.$theme]['primary.200'],
        danger: props.theme[props.$theme]['danger.200'],
      }[props.$color],
    }[props.$priority])};

  border: ${(props) =>
    ({
      low: 'none',
      medium: `${toRem(1)}rem solid ${props.theme[props.$theme]['base.300']}`,
      high: 'none',
    }[props.$priority])};
  border-radius: ${(props) =>
    ({
      medium: toRem(10),
      large: toRem(20),
    }[props.$curve])}rem;

  transition: scale 100ms ease-in-out;

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
    scale: 0.96;
  }

  & svg {
    height: ${toRem(16)}rem;

    flex-shrink: 0;
  }
`;

const Text = styled(Sans)`
  font-size: ${toRem(14)}rem;
`;

const DropdownContainer = styled.div<{
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

const DropdownItem = styled.button<{
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

  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  cursor: ${(props) =>
    props.$disabled
      ? 'not-allowed'
      : { text: 'pointer', 'switch-button': 'auto' }[props.$type]};

  &:hover {
    background-color: ${(props) =>
      props.$disabled
        ? undefined
        : {
            text: props.theme[props.$theme]['base.200'],
            'switch-button': undefined,
          }[props.$type]};
  }
`;

const DropdownText = styled(Sans)<{
  $color: ColorType;

  $theme: ThemeType;
}>`
  font-size: ${toRem(14)}rem;

  color: ${(props) =>
    ({
      base: props.theme[props.$theme]['base.500'],
      primary: props.theme[props.$theme]['primary.200'],
      danger: props.theme[props.$theme]['danger.200'],
    }[props.$color])};
`;

const DropdownUtilWrapper = styled.div`
  flex-shrink: 0;
`;

export default function Button({
  children,
  icon: Icon,
  options,
  disabled = false,
  color = 'base',
  priority = 'medium',
  curve = 'medium',
  ...attr
}: ButtonProps) {
  const [active, setActive] = useState<boolean>(false);

  const { theme } = useTheme();

  return options ? (
    <Popover
      isOpen={active}
      positions={['bottom']}
      align={'start'}
      padding={7}
      onClickOutside={() => setActive(false)}
      content={
        <DropdownContainer $theme={theme}>
          {Object.keys(options).map((key) => (
            <DropdownItem
              key={key}
              $disabled={options[key].disabled ?? false}
              $type={options[key].type ?? 'text'}
              $theme={theme}
              disabled={options[key].disabled ?? false}
              onClick={(event) => {
                switch (options[key].type) {
                  case 'text': {
                    options[key].onClick
                      ? options[key].onClick(event)
                      : undefined;

                    setActive(false);

                    break;
                  }
                  default:
                    undefined;
                }
              }}
              tabIndex={-1}
            >
              <DropdownText
                $color={options[key].color ?? 'base'}
                $theme={theme}
              >
                {options[key].name}
              </DropdownText>
              <DropdownUtilWrapper>
                {
                  {
                    text: undefined,
                    'switch-button': (
                      <SwitchButton
                        active={options[key].active ?? false}
                        onClick={(event) => {
                          options[key].onClick
                            ? options[key].onClick(event)
                            : undefined;
                        }}
                      />
                    ),
                  }[options[key].type ?? 'text']
                }
              </DropdownUtilWrapper>
            </DropdownItem>
          ))}
        </DropdownContainer>
      }
    >
      <Wrapper>
        <ButtonContainer
          $children={children}
          $icon={Icon}
          $active={active}
          $disabled={disabled}
          $color={color}
          $priority={priority}
          $curve={curve}
          $theme={theme}
          disabled={disabled}
          tabIndex={-1}
          onClick={(event) => {
            if (attr.onClick && typeof attr.onClick === 'function') {
              attr.onClick(event);
            }

            setActive(!active);
          }}
          {...attr}
        >
          {Icon ? <Icon /> : undefined}
          {children ? <Text>{children}</Text> : undefined}
        </ButtonContainer>
      </Wrapper>
    </Popover>
  ) : (
    <Wrapper>
      <ButtonContainer
        $children={children}
        $icon={Icon}
        $disabled={disabled}
        $color={color}
        $priority={priority}
        $curve={curve}
        $theme={theme}
        disabled={disabled}
        tabIndex={-1}
        {...attr}
      >
        {Icon ? <Icon /> : undefined}
        {children ? <Text>{children}</Text> : undefined}
      </ButtonContainer>
    </Wrapper>
  );
}
