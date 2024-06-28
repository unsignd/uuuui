import { ButtonHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import {
  BorderCurveType,
  ColorsetType,
  ColorType,
  PriorityType,
  ThemeType,
} from '../../types';
import { usePalette, useTheme } from '../../contexts';
import { toRem } from '../../utils';

import { ReactComponent as ArrowDownSVG } from '../../assets/arrow_down_8.svg';
import { ReactComponent as CheckSVG } from '../../assets/check_16.svg';
import { Popover } from 'react-tiny-popover';

interface MenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: undefined;
  options: {
    [key: string]: {
      name: string;
      onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => void;
    };
  };

  selected?: string;

  color?: ColorType;
  priority?: PriorityType;
  curve?: BorderCurveType;
}

const Container = styled.div``;

const ButtonContainer = styled.button<{
  $isActive: boolean;

  $color: ColorType;
  $priority: PriorityType;
  $curve: BorderCurveType;

  $theme: ThemeType;
  $colorset: ColorsetType;
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
      low: props.$isActive
        ? props.$colorset['base.200']
        : props.$colorset['base.100'],
      medium: props.$colorset['base.100'],
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

  transition: scale 100ms ease-in-out;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      ({
        low: props.$colorset['base.200'],
        medium: props.$colorset['base.100'],
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
  }

  &:active {
    scale: 0.96;
  }

  & svg {
    color: ${(props) =>
      ({
        low: props.$colorset['base.400'],
        medium: props.$colorset['base.400'],
        high: {
          base: props.$colorset['base.100'],
          primary: {
            light: props.$colorset['base.100'],
            dark: props.$colorset['base.500'],
          }[props.$theme],
        }[props.$color],
      }[props.$priority])};

    flex-shrink: 0;
  }
`;

const Text = styled.p<{
  $color: ColorType;
  $priority: PriorityType;

  $theme: ThemeType;
  $colorset: ColorsetType;
}>`
  margin: 0;

  font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: ${toRem(14)}rem;
  text-overflow: ellipsis;

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

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$colorset['base.200']};
  }

  & svg {
    color: ${(props) => props.$colorset['base.400']};

    flex-shrink: 0;
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

export default function Menu({
  options,
  selected = Object.keys(options)[0],
  color = 'base',
  priority = 'medium',
  curve = 'medium',
  ...attr
}: MenuProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Popover
      isOpen={isActive}
      positions={['bottom']}
      align={'start'}
      padding={7}
      onClickOutside={() => setIsActive(false)}
      content={
        <DropdownContainer $colorset={palette[theme]}>
          {Object.keys(options).map((key) => (
            <DropdownItem
              key={key}
              $colorset={palette[theme]}
              onClick={(event) => {
                options[key].onClick ? options[key].onClick(event) : undefined;

                setIsActive(false);
              }}
            >
              <DropdownText $colorset={palette[theme]}>
                {options[key].name}
              </DropdownText>
              {key === selected ? <CheckSVG /> : undefined}
            </DropdownItem>
          ))}
        </DropdownContainer>
      }
    >
      <Container>
        <ButtonContainer
          $isActive={isActive}
          $color={color}
          $priority={priority}
          $curve={curve}
          $theme={theme}
          $colorset={palette[theme]}
          onClick={() => setIsActive(!isActive)}
          {...attr}
        >
          <Text
            $color={color}
            $priority={priority}
            $theme={theme}
            $colorset={palette[theme]}
          >
            {options[selected].name}
          </Text>
          <ArrowDownSVG />
        </ButtonContainer>
      </Container>
    </Popover>
  );
}
