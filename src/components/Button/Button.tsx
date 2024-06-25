import { css } from '@emotion/css';
import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <button className={css``}>{children}</button>;
}
