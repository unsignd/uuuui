import styled from 'styled-components';
import { css } from '@emotion/css';
import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { toRem } from '../../utils';
import { BorderType, CurveType, PaletteType } from '../../types';
import Configs from '../../configs';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  border?: BorderType;
  curve?: CurveType;
}

const Wrapper = styled.button<{
  $border: BorderType;
  $curve: CurveType;

  $palette: PaletteType;
}>`
  height: ${toRem(40)}rem;

  padding: 0
    ${(props) =>
      ({
        visible: toRem(13),
        on_hover: toRem(14),
        invisible: toRem(14),
      }[props.$border])}rem;

  color: ${(props) =>
    ({
      visible: props.$palette['base.500'],
      on_hover: props.$palette['base.500'],
      invisible: props.$palette['base.100'],
    }[props.$border])};
  background-color: ${(props) =>
    ({
      visible: props.$palette['base.100'],
      on_hover: props.$palette['base.100'],
      invisible: props.$palette['base.500'],
    }[props.$border])};

  border: ${(props) =>
    ({
      visible: `${toRem(1)}rem solid ${props.$palette['base.300']}`,
      on_hover: 'none',
      invisible: 'none',
    }[props.$border])};
  border-radius: ${(props) =>
    ({
      normal: toRem(10),
      full: toRem(20),
    }[props.$curve])}rem;

  transition: scale 100ms ease-in-out;

  cursor: pointer;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  &:hover {
    padding: 0
      ${(props) =>
        ({
          visible: toRem(13),
          on_hover: toRem(13),
          invisible: toRem(14),
        }[props.$border])}rem;

    border: ${(props) =>
      ({
        visible: `${toRem(1)}rem solid ${props.$palette['base.300']}`,
        on_hover: `${toRem(1)}rem solid ${props.$palette['base.300']}`,
        invisible: 'none',
      }[props.$border])};

    scale: 1.025;
  }

  &:active {
    scale: 1;
  }
`;

export default function Button({
  children,
  border = 'invisible',
  curve = 'normal',
  ...attr
}: ButtonProps) {
  return (
    <Wrapper
      $border={border}
      $curve={curve}
      $palette={Configs.palette[Configs.theme]}
      {...attr}
    >
      {children}
    </Wrapper>
  );
}
