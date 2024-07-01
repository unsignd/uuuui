import type { Meta } from '@storybook/react';

import Tag from './Tag';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag/Icon',
  component: Tag,
};

export const Without_Icon: Meta<typeof Tag> = {
  args: {
    children: 'Tag',
  },
};

export const With_Icon: Meta<typeof Tag> = {
  args: {
    children: 'Tag',
    icon: TicketSVG,
  },
};

export const Icon_Only: Meta<typeof Tag> = {
  args: {
    icon: TicketSVG,
  },
};

export default meta;
