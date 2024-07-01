import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Component/Input/Disabled',
  component: Input,
};

type Story = StoryObj<typeof Input>;

export const Not_Disabled: Story = {
  args: {
    disabled: false,
    placeholder: 'Search Items...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Search Items...',
  },
};

export default meta;
