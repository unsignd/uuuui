import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';
import Button from '../Button';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip/Icon',
  component: Tooltip,
};

type Story = StoryObj<typeof Tooltip>;

export const Without_Icon: Story = {
  args: {
    children: <Button>Hover me!</Button>,
    text: 'Tag',
  },
};

export const With_Icon: Story = {
  args: {
    children: <Button>Hover me!</Button>,
    icon: TicketSVG,
    text: 'Tag',
  },
};

export const Icon_Only: Story = {
  args: {
    children: <Button>Hover me!</Button>,
    icon: TicketSVG,
  },
};

export default meta;
