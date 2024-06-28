import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { usePalette, useTheme } from '../../contexts';
import { ColorsetType } from '../../types';
import { toRem } from '../../utils';

interface TagProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
}

const Container = styled.p<{
  $colorset: ColorsetType;
}>`
  height: ${toRem(24)}rem;

  margin: 0;
  padding: 0 ${toRem(7)}rem;

  display: flex;
  align-items: center;

  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: ${toRem(12)}rem;
  font-weight: 600;
  text-overflow: ellipsis;
  letter-spacing: ${toRem(-0.35)}rem;

  color: ${(props) => props.$colorset['base.400']};
  background-color: ${(props) => props.$colorset['base.200']};

  border-radius: ${toRem(7)}rem;

  overflow: hidden;
  white-space: nowrap;
`;

export default function Tag({ children, ...attr }: TagProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $colorset={palette[theme]} {...attr}>
      {children}
    </Container>
  );
}
