import { css } from '@emotion/css';
import { ReactNode } from 'react';
import { toRem } from '../../utils';
import { BorderType, CurveType } from '../../types';
import { palette, theme } from '../../configs';

type ButtonProps = {
  children: ReactNode;

  border?: BorderType;
  curve?: CurveType;
};

export default function Button({
  children,
  border = 'invisible',
  curve = 'normal',
}: ButtonProps) {
  return (
    <button
      className={css`
        height: ${toRem(40)}rem;

        padding: 0
          ${{
            visible: toRem(13),
            on_hover: toRem(14),
            invisible: toRem(14),
          }[border]}rem;

        color: ${{
          visible: palette[theme]['base.500'],
          on_hover: palette[theme]['base.500'],
          invisible: palette[theme]['base.100'],
        }[border]};

        background-color: ${{
          visible: palette[theme]['base.100'],
          on_hover: palette[theme]['base.100'],
          invisible: palette[theme]['base.500'],
        }[border]};

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: ${{
          visible: `${toRem(1)}rem solid ${palette[theme]['base.300']}`,
          on_hover: 'none',
          invisible: 'none',
        }[border]};
        border-radius: ${{
          normal: toRem(10),
          full: toRem(20),
        }[curve]}rem;

        transition: scale 100ms ease-in-out;

        cursor: pointer;

        &:hover {
          padding: 0
            ${{
              visible: toRem(13),
              on_hover: toRem(13),
              invisible: toRem(14),
            }[border]}rem;

          border: ${{
            visible: `${toRem(1)}rem solid ${palette[theme]['base.300']}`,
            on_hover: `${toRem(1)}rem solid ${palette[theme]['base.300']}`,
            invisible: 'none',
          }[border]};

          scale: 1.025;
        }

        &:active {
          scale: 1;
        }
      `}
    >
      {children}
    </button>
  );
}
