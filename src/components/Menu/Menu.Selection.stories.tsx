import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Component/Menu/Selection',
  component: Menu,
};

type Story = StoryObj<typeof Menu>;

export const Without_Selection: Story = {
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
  },
};

export const With_Selection: Story = {
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
    selection: 'option_3',
  },
};

export default meta;
