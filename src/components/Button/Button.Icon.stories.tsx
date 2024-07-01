import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Icon',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Without_Icon: Story = {
  args: {
    children: 'Button',
  },
};

export const With_Icon: Story = {
  args: {
    children: 'Button',
    icon: TicketSVG,
  },
};

export const Icon_Only: Story = {
  args: {
    icon: TicketSVG,
  },
};

export default meta;
