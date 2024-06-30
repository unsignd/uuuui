import rht from 'react-hot-toast';
import styled from 'styled-components';
import { Sans } from '../global';
import { toRem } from '.';

const Text = styled(Sans)`
  font-size: ${toRem(14)}rem;

  div:has(&) {
    margin: 0;
  }
`;

export default function toast(text: string) {
  rht(() => <Text>{text}</Text>);
}
