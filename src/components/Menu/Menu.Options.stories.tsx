import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Component/Menu/Options',
  component: Menu,
};

type Story = StoryObj<typeof Menu>;

export const With_Options: Story = {
  args: {
    options: {
      default: {
        text: 'Option',
      },
      colored: {
        text: 'Option with Color',
        color: 'danger',
      },
      disabled: {
        text: 'Disabled Option',
        disabled: true,
      },
    },
  },
};

export default meta;
