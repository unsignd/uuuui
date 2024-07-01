import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Component/Menu/Curve',
  component: Menu,
};

type Story = StoryObj<typeof Menu>;

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
