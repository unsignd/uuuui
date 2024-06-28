import { ButtonHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { toRem } from '../../utils';
import { PriorityType, BorderCurveType, DropdownType } from '../../types';
import { ColorsetType } from '../../types';
import { usePalette, useTheme } from '../../contexts';
import { Popover } from 'react-tiny-popover';
import SwitchButton from '../SwitchButton';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  options?: {
    [key: string]: {
      name: string;
      type?: DropdownType;
      isActive?: boolean;
      onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => void;
    };
  };

  priority?: PriorityType;
  curve?: BorderCurveType;
}

const Container = styled.div``;

const ButtonContainer = styled.button<{
  $children?: string;
  $icon?: React.FC<React.SVGProps<SVGSVGElement>>;

  $priority: PriorityType;
  $curve: BorderCurveType;

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
      high: props.$colorset['base.100'],
    }[props.$priority])};
  background-color: ${(props) =>
    ({
      low: props.$colorset['base.100'],
      medium: props.$colorset['base.100'],
      high: props.$colorset['base.500'],
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

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border: ${(props) =>
      ({
        low: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
        medium: `${toRem(1)}rem solid ${props.$colorset['base.300']}`,
        high: 'none',
      }[props.$priority])};
  }

  &:active {
    scale: 0.96;
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

  cursor: ${(props) =>
    ({ text: 'pointer', 'switch-button': 'auto' }[props.$type])};

  &:hover {
    background-color: ${(props) =>
      ({ text: props.$colorset['base.200'], 'switch-button': 'transparent' }[
        props.$type
      ])};
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
  priority = 'medium',
  curve = 'medium',
  ...attr
}: ButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { palette } = usePalette();
  const { theme } = useTheme();

  return options ? (
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
              $type={options[key].type ?? 'text'}
              $colorset={palette[theme]}
              onClick={(event) => {
                switch (options[key].type) {
                  case 'text': {
                    options[key].onClick
                      ? options[key].onClick(event)
                      : undefined;

                    setIsActive(false);

                    break;
                  }
                  default:
                    undefined;
                }
              }}
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
                        isActive={options[key].isActive ?? false}
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
      <Container>
        <ButtonContainer
          $children={children}
          $icon={Icon}
          $priority={priority}
          $curve={curve}
          $colorset={palette[theme]}
          onClick={(event) => {
            if (attr.onClick && typeof attr.onClick === 'function') {
              attr.onClick(event);
            }

            setIsActive(!isActive);
          }}
          {...attr}
        >
          {Icon ? <Icon /> : undefined}
          <Text>{children}</Text>
        </ButtonContainer>
      </Container>
    </Popover>
  ) : (
    <Container>
      <ButtonContainer
        $children={children}
        $icon={Icon}
        $priority={priority}
        $curve={curve}
        $colorset={palette[theme]}
        {...attr}
      >
        {Icon ? <Icon /> : undefined}
        <Text>{children}</Text>
      </ButtonContainer>
    </Container>
  );
}
