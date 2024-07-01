import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Priority',
  component: Button,
};

export const Low: Meta<typeof Button> = {
  args: {
    priority: 'low',
    children: 'Button',
  },
};
export const Medium: Meta<typeof Button> = {
  args: {
    priority: 'medium',
    children: 'Button',
  },
};
export const High: Meta<typeof Button> = {
  args: {
    priority: 'high',
    children: 'Button',
  },
};

export default meta;
