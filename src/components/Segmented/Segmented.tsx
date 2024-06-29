import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  BorderCurveType,
  ColorType,
  PriorityType,
  ThemeType,
} from '../../types';
import { toRem } from '../../utils';
import { Sans } from '../../global';
import { useTheme } from '../../contexts';
import Icon from '../Icon';

export interface SegmentedProps extends HTMLAttributes<HTMLDivElement> {
  options: {
    [key: string]: {
      disabled?: boolean;

      text?: string;
      icon?: React.FC<React.SVGProps<SVGSVGElement>>;
      color?: ColorType;

      onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => void;
    };
  };

  selection?: string;

  curve?: BorderCurveType;
}

const Wrapper = styled.div`
  height: ${toRem(40)}rem;

  display: flex;
  gap: ${toRem(7)}rem;
`;

const ButtonContainer = styled.button<{
  $children?: ReactNode;
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $active?: boolean;
  $disabled: boolean;

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

  color: ${(props) => props.theme[props.$theme]['base.500']};
  background-color: ${(props) =>
    props.$active
      ? props.theme[props.$theme]['base.200']
      : props.theme[props.$theme]['base.100']};

  border: none;
  border-radius: ${(props) =>
    ({
      medium: toRem(10),
      large: toRem(20),
    }[props.$curve])}rem;

  transition: scale 100ms ease-in-out, color 150ms ease-in-out,
    background-color 150ms ease-in-out;

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    color: ${(props) =>
      props.$active ? undefined : props.theme[props.$theme]['base.400']};
    background-color: ${(props) =>
      props.$disabled ? undefined : props.theme[props.$theme]['base.200']};
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

export default function Segmented({
  options,
  selection = Object.keys(options)[0],
  curve = 'medium',
  ...attr
}: SegmentedProps) {
  const { theme } = useTheme();

  return (
    <Wrapper {...attr}>
      {Object.keys(options).map((key) => (
        <ButtonContainer
          key={key}
          $children={options[key].text}
          $icon={options[key].icon}
          $active={selection === key}
          $disabled={options[key].disabled ?? false}
          $curve={curve}
          $theme={theme}
          onClick={(event) =>
            options[key].onClick ? options[key].onClick(event) : undefined
          }
        >
          {options[key].icon ? <Icon icon={options[key].icon} /> : undefined}
          {options[key].text ? <Text>{options[key].text}</Text> : undefined}
        </ButtonContainer>
      ))}
    </Wrapper>
  );
}
