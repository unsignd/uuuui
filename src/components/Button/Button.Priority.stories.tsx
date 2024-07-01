import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Priority',
  component: Button,
};

export const Low: Meta<typeof Button> = {
  args: {
    children: 'Button',
    priority: 'low',
  },
};
export const Medium: Meta<typeof Button> = {
  args: {
    children: 'Button',
    priority: 'medium',
  },
};
export const High: Meta<typeof Button> = {
  args: {
    children: 'Button',
    priority: 'high',
  },
};

export default meta;
