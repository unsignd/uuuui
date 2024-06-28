import { HTMLAttributes, ReactElement } from 'react';
import { ButtonProps } from '../Button/Button';
import { InputProps } from '../Input/Input';
import { MenuProps } from '../Menu/Menu';
import { styled } from 'styled-components';
import { toRem } from '../../utils';

export interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  children:
    | ReactElement<ButtonProps>
    | ReactElement<ButtonProps>[]
    | ReactElement<InputProps>
    | ReactElement<InputProps>[]
    | ReactElement<MenuProps>
    | ReactElement<MenuProps>[];
}

const Container = styled.div`
  display: flex;

  & > :not(:only-child):not(:first-child):not(:last-child),
  & > :not(:only-child):not(:first-child):not(:last-child) * {
    border-width: ${toRem(1)}rem ${toRem(0.5)}rem;
    border-radius: 0;
  }

  & > :first-child:not(:only-child),
  & > :first-child:not(:only-child) * {
    border-right-width: ${toRem(0.5)}rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > :last-child:not(:only-child),
  & > :last-child:not(:only-child) * {
    border-left-width: ${toRem(0.5)}rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default function Group({ children, ...attr }: GroupProps) {
  return <Container {...attr}>{children}</Container>;
}
