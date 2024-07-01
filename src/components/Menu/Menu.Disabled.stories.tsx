import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu/Disabled',
  component: Menu,
};

type Story = StoryObj<typeof Menu>;

export const Not_Disabled: Story = {
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
    disabled: false,
  },
};

export const Disabled: Story = {
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
    disabled: true,
  },
};

export default meta;
