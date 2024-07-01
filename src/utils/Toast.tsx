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

class Toast {
  constructor(text: string) {
    rht(() => <Text>{text}</Text>);
  }

  static success(text: string) {
    rht.success(() => <Text>{text}</Text>, {
      icon: '',
    });
  }

  static error(text: string) {
    rht.error(() => <Text>{text}</Text>, {
      icon: '',
    });
  }
}

function toast(text: string) {
  return new Toast(text);
}

toast.success = Toast.success;
toast.error = Toast.error;

export default toast;
