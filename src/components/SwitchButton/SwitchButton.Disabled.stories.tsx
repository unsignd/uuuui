import type { Meta, StoryObj } from '@storybook/react';

import SwitchButton from './SwitchButton';

const meta: Meta<typeof SwitchButton> = {
  title: 'Components/SwitchButton/Disabled',
  component: SwitchButton,
};

type Story = StoryObj<typeof SwitchButton>;

export const Not_Disabled: Story = {
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export default meta;
