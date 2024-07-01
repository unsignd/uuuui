import type { Meta } from '@storybook/react';

import Icon from './Icon';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/Color',
  component: Icon,
};

export const Base: Meta<typeof Icon> = {
  args: {
    icon: TicketSVG,
    color: 'base',
    priority: 'high',
  },
};

export const Primary: Meta<typeof Icon> = {
  args: {
    icon: TicketSVG,
    color: 'primary',
    priority: 'high',
  },
};

export const Danger: Meta<typeof Icon> = {
  args: {
    icon: TicketSVG,
    color: 'danger',
    priority: 'high',
  },
};

export const Warning: Meta<typeof Icon> = {
  args: {
    icon: TicketSVG,
    color: 'warning',
    priority: 'high',
  },
};

export default meta;
