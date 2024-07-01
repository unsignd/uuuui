import type { Meta } from '@storybook/react';

import SwitchButton from './SwitchButton';

const meta: Meta<typeof SwitchButton> = {
  title: 'Components/SwitchButton/Disabled',
  component: SwitchButton,
};

export const Not_Disabled: Meta<typeof SwitchButton> = {
  args: {
    disabled: false,
  },
};

export const Disabled: Meta<typeof SwitchButton> = {
  args: {
    disabled: true,
  },
};

export default meta;
