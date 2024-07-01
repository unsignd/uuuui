import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/Color',
  component: Icon,
};

type Story = StoryObj<typeof Icon>;

export const Base: Story = {
  args: {
    icon: TicketSVG,
    color: 'base',
    priority: 'high',
  },
};

export const Primary: Story = {
  args: {
    icon: TicketSVG,
    color: 'primary',
    priority: 'high',
  },
};

export const Danger: Story = {
  args: {
    icon: TicketSVG,
    color: 'danger',
    priority: 'high',
  },
};

export const Warning: Story = {
  args: {
    icon: TicketSVG,
    color: 'warning',
    priority: 'high',
  },
};

export default meta;
