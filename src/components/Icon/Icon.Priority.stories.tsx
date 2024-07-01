import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/Priority',
  component: Icon,
};

type Story = StoryObj<typeof Icon>;

export const Low: Story = {
  args: {
    icon: TicketSVG,
    priority: 'low',
  },
};
export const Medium: Story = {
  args: {
    icon: TicketSVG,
    priority: 'medium',
  },
};
export const High: Story = {
  args: {
    icon: TicketSVG,
    priority: 'high',
  },
};

export default meta;
