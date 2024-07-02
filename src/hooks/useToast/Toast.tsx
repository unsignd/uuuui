import reactToast from 'react-hot-toast';
import styled from 'styled-components';
import { Sans } from '../../global';
import { toRem } from '../../utils';

const Text = styled(Sans)`
  max-width: 100%;

  display: inline-block;

  font-size: ${toRem(14)}rem;

  div:has(&) {
    margin: 0;

    overflow: hidden;
  }
`;

const Icon = styled.div`
  div:has(&) {
    min-width: 0;
  }
`;

class Toast {
  static activeToasts = [];

  constructor(text: string) {
    reactToast(() => <Text>{text}</Text>);
  }

  static success(text: string) {
    reactToast.success(() => <Text>{text}</Text>, {
      icon: <Icon />,
    });
  }

  static error(text: string) {
    reactToast.error(() => <Text>{text}</Text>, {
      icon: <Icon />,
    });
  }

  static warning(text: string) {
    reactToast.loading(() => <Text>{text}</Text>, {
      icon: <Icon />,
    });
  }
}

function toast(text: string) {
  return new Toast(text);
}

toast.success = Toast.success;
toast.error = Toast.error;
toast.warning = Toast.warning;

export default toast;
