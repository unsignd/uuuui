import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Priority',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Low: Story = {
  args: {
    children: 'Button',
    priority: 'low',
  },
};
export const Medium: Story = {
  args: {
    children: 'Button',
    priority: 'medium',
  },
};
export const High: Story = {
  args: {
    children: 'Button',
    priority: 'high',
  },
};

export default meta;
