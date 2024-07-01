import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Component/Input/Curve',
  component: Input,
};

type Story = StoryObj<typeof Input>;

export const Medium: Story = {
  args: {
    curve: 'medium',
    placeholder: 'Search Items...',
  },
};

export const Large: Story = {
  args: {
    curve: 'large',
    placeholder: 'Search Items...',
  },
};

export default meta;
