import type { Meta } from '@storybook/react';

import Input from './Input';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Input> = {
  title: 'Components/Input/Icon',
  component: Input,
};

export const Without_Icon: Meta<typeof Input> = {
  args: {
    placeholder: 'Find Items...',
  },
};

export const With_Icon: Meta<typeof Input> = {
  args: {
    icon: TicketSVG,
    placeholder: 'Find Items...',
  },
};

export default meta;
