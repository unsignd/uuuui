import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input/Disabled',
  component: Input,
};

type Story = StoryObj<typeof Input>;

export const Not_Disabled: Story = {
  args: {
    disabled: false,
    placeholder: 'Find Items...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Find Items...',
  },
};

export default meta;
