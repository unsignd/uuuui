import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Color',
  component: Button,
};

export const Base: Meta<typeof Button> = {
  args: {
    children: 'Button',
    color: 'base',
    priority: 'high',
  },
};

export const Primary: Meta<typeof Button> = {
  args: {
    children: 'Button',
    color: 'primary',
    priority: 'high',
  },
};

export const Danger: Meta<typeof Button> = {
  args: {
    children: 'Button',
    color: 'danger',
    priority: 'high',
  },
};

export const Warning: Meta<typeof Button> = {
  args: {
    children: 'Button',
    color: 'warning',
    priority: 'high',
  },
};

export default meta;
