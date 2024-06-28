import { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { toRem } from '../../utils';
import {
  PriorityType,
  BorderCurveType,
  DropdownType,
  ColorType,
  ThemeType,
} from '../../types';
import { ColorsetType } from '../../types';
import { usePalette, useTheme } from '../../contexts';
import { Popover } from 'react-tiny-popover';
import SwitchButton from '../SwitchButton';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  options?: {
    [key: string]: {
      name: string;
      type?: DropdownType;
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

const Container = styled.button<{
  $children?: string;
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $active?: boolean;
  $disabled: boolean;

  $color: ColorType;
  $priority: PriorityType;
  $curve: BorderCurveType;

  $theme: ThemeType;
  $colorset: ColorsetType;
}>`
  width: ${(props) =>
    !props.$children && props.$icon ? `${toRem(40)}rem` : 'auto'};
  height: ${toRem(40)}rem;

  padding: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(7)}rem;

  color: ${(props) =>
    ({
      low: props.$colorset['base.500'],
      medium: props.$colorset['base.500'],
      high: {
        base: props.$colorset['base.100'],
        primary: {
          light: props.$colorset['base.100'],
          dark: props.$colorset['base.500'],
        }[props.$theme],
      }[props.$color],
    }[props.$priority])};
  background-color: ${(props) =>
    ({
      low: props.$active
        ? props.$colorset['base.200']
        : props.$colorset['base.100'],
      medium: props.$active
        ? props.$colorset['base.200']
        : props.$colorset['base.100'],
      high: {
        base: props.$colorset['base.500'],
        primary: props.$colorset['primary.200'],
      }[props.$color],
    }[props.$priority])};

  border: ${(props) =>
    ({
      low: 'none',
      medium: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
      high: 'none',
    }[props.$priority])};
  border-radius: ${(props) =>
    ({
      medium: toRem(10),
      large: toRem(20),
    }[props.$curve])}rem;

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
            low: props.$colorset['base.200'],
            medium: props.$colorset['base.200'],
            high: undefined,
          }[props.$priority]};
  }

  & svg {
    height: ${toRem(16)}rem;

    flex-shrink: 0;
  }
`;

const Text = styled.p`
  margin: 0;

  font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: ${toRem(14)}rem;
  text-overflow: ellipsis;

  overflow: hidden;
  white-space: nowrap;
`;

const DropdownContainer = styled.div<{
  $colorset: ColorsetType;
}>`
  width: ${toRem(240)}rem;

  padding: ${toRem(7)}rem 0;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.$colorset['base.100']};

  border: ${toRem(1)}rem solid ${(props) => props.$colorset['base.300']};
  border-radius: ${toRem(7)}rem;

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const DropdownItem = styled.button<{
  $disabled: boolean;

  $type: DropdownType;

  $colorset: ColorsetType;
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
        : { text: props.$colorset['base.200'], 'switch-button': undefined }[
            props.$type
          ]};
  }
`;

const DropdownText = styled.p<{
  $colorset: ColorsetType;
}>`
  margin: 0;

  font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: ${toRem(14)}rem;
  text-overflow: ellipsis;

  color: ${(props) => props.$colorset['base.500']};

  overflow: hidden;
  white-space: nowrap;
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

  const { palette } = usePalette();
  const { theme } = useTheme();

  return options ? (
    <Popover
      isOpen={active}
      positions={['bottom']}
      align={'start'}
      padding={7}
      onClickOutside={() => setActive(false)}
      content={
        <DropdownContainer $colorset={palette[theme]}>
          {Object.keys(options).map((key) => (
            <DropdownItem
              key={key}
              $disabled={options[key].disabled ?? false}
              $type={options[key].type ?? 'text'}
              $colorset={palette[theme]}
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
              <DropdownText $colorset={palette[theme]}>
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
      <Container
        $children={children}
        $icon={Icon}
        $active={active}
        $disabled={disabled}
        $color={color}
        $priority={priority}
        $curve={curve}
        $theme={theme}
        $colorset={palette[theme]}
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
        <Text>{children}</Text>
      </Container>
    </Popover>
  ) : (
    <Container
      $children={children}
      $icon={Icon}
      $disabled={disabled}
      $color={color}
      $priority={priority}
      $curve={curve}
      $theme={theme}
      $colorset={palette[theme]}
      disabled={disabled}
      tabIndex={-1}
      {...attr}
    >
      {Icon ? <Icon /> : undefined}
      <Text>{children}</Text>
    </Container>
  );
}
