import type { Meta, StoryObj } from '@storybook/react';

import SwitchButton from './SwitchButton';

const meta: Meta<typeof SwitchButton> = {
  title: 'Component/SwitchButton/Active',
  component: SwitchButton,
};

type Story = StoryObj<typeof SwitchButton>;

export const Not_Active: Story = {
  args: {
    active: false,
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
};

export default meta;
