import type { Meta } from '@storybook/react';

import SwitchButton from './SwitchButton';

const meta: Meta<typeof SwitchButton> = {
  title: 'Components/SwitchButton/Active',
  component: SwitchButton,
};

export const Not_Active: Meta<typeof SwitchButton> = {
  args: {
    active: false,
  },
};

export const Active: Meta<typeof SwitchButton> = {
  args: {
    active: true,
  },
};

export default meta;
