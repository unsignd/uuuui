import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Color',
  component: Button,
};

export const Base: Meta<typeof Button> = {
  args: {
    color: 'base',
    priority: 'high',
    children: 'Button',
  },
};

export const Primary: Meta<typeof Button> = {
  args: {
    color: 'primary',
    priority: 'high',
    children: 'Button',
  },
};

export const Danger: Meta<typeof Button> = {
  args: {
    color: 'danger',
    priority: 'high',
    children: 'Button',
  },
};

export const Warning: Meta<typeof Button> = {
  args: {
    color: 'warning',
    priority: 'high',
    children: 'Button',
  },
};

export default meta;
