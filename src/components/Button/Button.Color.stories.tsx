import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Component/Button/Color',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: 'Button',
    color: 'base',
    priority: 'high',
  },
};

export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    priority: 'high',
  },
};

export const Danger: Story = {
  args: {
    children: 'Button',
    color: 'danger',
    priority: 'high',
  },
};

export const Warning: Story = {
  args: {
    children: 'Button',
    color: 'warning',
    priority: 'high',
  },
};

export default meta;
