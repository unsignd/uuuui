import { css } from '@emotion/css';
import { ReactNode } from 'react';
import { Type } from '../..';
import { toRem } from '../../utils/unit';

type ButtonProps = {
  children: ReactNode;

  border?: Type.Border;
  curve?: Type.Curve;
};

export default function Button({
  children,
  border = Type.Border.INVISIBLE,
  curve = Type.Curve.NORMAL,
}: ButtonProps) {
  return (
    <button
      className={css`
        height: ${{
          [Type.Border.VISIBLE]: toRem(40),
          [Type.Border.ON_HOVER]: toRem(40),
          [Type.Border.INVISIBLE]: toRem(40),
        }[border]}rem;

        padding: 0
          ${{
            [Type.Border.VISIBLE]: toRem(13),
            [Type.Border.ON_HOVER]: toRem(14),
            [Type.Border.INVISIBLE]: toRem(14),
          }[border]}rem;

        color: ${{
          [Type.Border.VISIBLE]: `#000`,
          [Type.Border.ON_HOVER]: '#000',
          [Type.Border.INVISIBLE]: '#fff',
        }[border]};
        background-color: ${{
          [Type.Border.VISIBLE]: '#fff',
          [Type.Border.ON_HOVER]: '#fff',
          [Type.Border.INVISIBLE]: '#08090a',
        }[border]};

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: ${{
          [Type.Border.VISIBLE]: `${toRem(1)}rem solid #ced0d6`,
          [Type.Border.ON_HOVER]: 'none',
          [Type.Border.INVISIBLE]: 'none',
        }[border]};
        border-radius: ${{
          [Type.Curve.NORMAL]: toRem(10),
          [Type.Curve.FULL]: toRem(20),
        }[curve]}rem;

        transition: scale 100ms ease-in-out;

        cursor: pointer;

        &:hover {
          height: ${{
            [Type.Border.VISIBLE]: toRem(40),
            [Type.Border.ON_HOVER]: toRem(40),
            [Type.Border.INVISIBLE]: toRem(40),
          }[border]}rem;

          padding: 0
            ${{
              [Type.Border.VISIBLE]: toRem(13),
              [Type.Border.ON_HOVER]: toRem(13),
              [Type.Border.INVISIBLE]: toRem(14),
            }[border]}rem;

          border: ${{
            [Type.Border.VISIBLE]: `${toRem(1)}rem solid #ced0d6`,
            [Type.Border.ON_HOVER]: `${toRem(1)}rem solid #ced0d6`,
            [Type.Border.INVISIBLE]: 'none',
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
