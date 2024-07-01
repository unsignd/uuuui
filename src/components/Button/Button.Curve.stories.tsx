import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Curve',
  component: Button,
};

export const Medium: Meta<typeof Button> = {
  args: {
    children: 'Button',
    curve: 'medium',
  },
};

export const Large: Meta<typeof Button> = {
  args: {
    children: 'Button',
    curve: 'large',
  },
};

export default meta;
