import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Curve',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Medium: Story = {
  args: {
    children: 'Button',
    curve: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    curve: 'large',
  },
};

export default meta;
