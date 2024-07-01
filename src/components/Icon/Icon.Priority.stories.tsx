import type { Meta } from '@storybook/react';

import Icon from './Icon';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/Priority',
  component: Icon,
};

export const Low: Meta<typeof Icon> = {
  args: {
    icon: TicketSVG,
    priority: 'low',
  },
};
export const Medium: Meta<typeof Icon> = {
  args: {
    icon: TicketSVG,
    priority: 'medium',
  },
};
export const High: Meta<typeof Icon> = {
  args: {
    icon: TicketSVG,
    priority: 'high',
  },
};

export default meta;
