import type { Meta, StoryObj } from '@storybook/react';

import Segmented from './Segmented';

const meta: Meta<typeof Segmented> = {
  title: 'Components/Segmented/Curve',
  component: Segmented,
};

type Story = StoryObj<typeof Segmented>;

export const Medium: Story = {
  args: {
    options: {
      option_1: {
        text: 'Option 1',
      },
      option_2: {
        text: 'Option 2',
      },
      option_3: {
        text: 'Option 3',
      },
    },
    curve: 'medium',
  },
};

export const Large: Story = {
  args: {
    options: {
      option_1: {
        text: 'Option 1',
      },
      option_2: {
        text: 'Option 2',
      },
      option_3: {
        text: 'Option 3',
      },
    },
    curve: 'large',
  },
};

export default meta;
