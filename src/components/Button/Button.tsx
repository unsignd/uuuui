import { css } from '@emotion/css';
import { ReactNode } from 'react';
import { BorderType, CurveType } from '../../types';

type ButtonProps = {
  children: ReactNode;

  border?: BorderType;
  curve?: CurveType;
};

export default function Button({
  children,
  border = BorderType.INVISIBLE,
  curve = CurveType.SLIGHT,
}: ButtonProps) {
  return (
    <button
      className={css`
        height: 2.5rem;

        padding: 0 0.875rem;

        border: ${{
          [BorderType.VISIBLE]: `0.063rem solid #000`,
          [BorderType.INVISIBLE]: 'none',
        }[border]};
        border-radius: ${{
          [CurveType.SLIGHT]: 0.625,
          [CurveType.FULL]: 1.25,
        }[curve]}rem;
      `}
    >
      {children}
    </button>
  );
}
