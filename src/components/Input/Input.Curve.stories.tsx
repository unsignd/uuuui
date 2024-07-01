import type { Meta } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input/Curve',
  component: Input,
};

export const Medium: Meta<typeof Input> = {
  args: {
    curve: 'medium',
  },
};

export const Large: Meta<typeof Input> = {
  args: {
    curve: 'large',
  },
};

export default meta;
