import { css } from '@emotion/css';
import { ReactNode } from 'react';
import { toRem } from '../../utils';
import { BorderType, CurveType } from '../../types';

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
          visible: `#08090a`,
          on_hover: `#08090a`,
          invisible: `#fff`,
        }[border]};

        background-color: ${{
          visible: `#fff`,
          on_hover: `#fff`,
          invisible: `#08090a`,
        }[border]};

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: ${{
          visible: `${toRem(1)}rem solid #ced0d6`,
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
            visible: `${toRem(1)}rem solid #ced0d6`,
            on_hover: `${toRem(1)}rem solid #ced0`,
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
