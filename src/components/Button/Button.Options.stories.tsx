import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Options',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Without_Options: Story = {
  args: {
    children: 'Button',
  },
};
export const With_Options: Story = {
  args: {
    children: 'Button',
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
      switch: {
        text: 'Option with Switch Button',
        type: 'switch-button',
        active: true,
      },
    },
  },
};

export default meta;
