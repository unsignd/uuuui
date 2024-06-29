import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface SegmentedProps extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div``;

export default function Segmented({ ...attr }: SegmentedProps) {
  return <Wrapper {...attr}></Wrapper>;
}
