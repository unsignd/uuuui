import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Disabled',
  component: Button,
};

export const Not_Disabled: Meta<typeof Button> = {
  args: {
    children: 'Button',
    disabled: false,
  },
};

export const Disabled: Meta<typeof Button> = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export default meta;
