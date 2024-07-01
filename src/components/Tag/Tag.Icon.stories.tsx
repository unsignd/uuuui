import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Tag> = {
  title: 'Component/Tag/Icon',
  component: Tag,
};

type Story = StoryObj<typeof Tag>;

export const Without_Icon: Story = {
  args: {
    children: 'Tag',
  },
};

export const With_Icon: Story = {
  args: {
    children: 'Tag',
    icon: TicketSVG,
  },
};

export const Icon_Only: Story = {
  args: {
    icon: TicketSVG,
  },
};

export default meta;
