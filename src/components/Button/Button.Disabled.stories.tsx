import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Component/Button/Disabled',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Not_Disabled: Story = {
  args: {
    children: 'Button',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export default meta;
