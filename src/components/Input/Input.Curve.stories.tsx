import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input/Curve',
  component: Input,
};

type Story = StoryObj<typeof Input>;

export const Medium: Story = {
  args: {
    curve: 'medium',
    placeholder: 'Find Items...',
  },
};

export const Large: Story = {
  args: {
    curve: 'large',
    placeholder: 'Find Items...',
  },
};

export default meta;
