import type { Meta } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input/Disabled',
  component: Input,
};

export const Not_Disabled: Meta<typeof Input> = {
  args: {
    disabled: false,
    placeholder: 'Find Items...',
  },
};

export const Disabled: Meta<typeof Input> = {
  args: {
    disabled: true,
    placeholder: 'Find Items...',
  },
};

export default meta;
