import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Disabled',
  component: Button,
};

export const Not_Disabled: Meta<typeof Button> = {
  args: {
    disabled: false,
    children: 'Button',
  },
};

export const Disabled: Meta<typeof Button> = {
  args: {
    disabled: true,
    children: 'Button',
  },
};

export default meta;
