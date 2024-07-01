import type { Meta, StoryObj } from '@storybook/react';

import Segmented from './Segmented';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Segmented> = {
  title: 'Components/Segmented/Options',
  component: Segmented,
};

type Story = StoryObj<typeof Segmented>;

export const With_Options: Story = {
  args: {
    options: {
      default: {
        text: 'Option',
      },
      with_icon: {
        text: 'Option with Icon',
        icon: TicketSVG,
      },
      only_icon: {
        icon: TicketSVG,
      },
      disabled: {
        text: 'Disabled Option',
        disabled: true,
      },
    },
  },
};

export default meta;
