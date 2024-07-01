import type { Meta } from '@storybook/react';

import Button from './Button';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Icon',
  component: Button,
};

export const Without_Icon: Meta<typeof Button> = {
  args: {
    children: 'Button',
  },
};

export const With_Icon: Meta<typeof Button> = {
  args: {
    icon: TicketSVG,
    children: 'Button',
  },
};

export const Only_Icon: Meta<typeof Button> = {
  args: {
    icon: TicketSVG,
  },
};

export default meta;
