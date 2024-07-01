import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Overwritten description',
    },
  },
};

export const Low_Priority: Meta<typeof Button> = {
  args: {
    priority: 'low',
    children: 'Button',
  },
};
export const Medium_Priority: Meta<typeof Button> = {
  args: {
    priority: 'medium',
    children: 'Button',
  },
};
export const High_Priority: Meta<typeof Button> = {
  args: {
    priority: 'high',
    children: 'Button',
  },
};

export default meta;
