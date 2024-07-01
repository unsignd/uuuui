import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Input> = {
  title: 'Component/Input/Icon',
  component: Input,
};

type Story = StoryObj<typeof Input>;

export const Without_Icon: Story = {
  args: {
    placeholder: 'Search Items...',
  },
};

export const With_Icon: Story = {
  args: {
    icon: TicketSVG,
    placeholder: 'Search Items...',
  },
};

export default meta;
