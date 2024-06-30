import styled from 'styled-components';
import { toRem } from '../utils';

const Mono = styled.p`
  margin: 0;

  display: flex;
  align-items: center;

  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  text-overflow: ellipsis;
  letter-spacing: ${toRem(-0.35)}rem;

  overflow: hidden;
  white-space: nowrap;
`;

export default Mono;
