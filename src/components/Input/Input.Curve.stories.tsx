import type { Meta } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input/Curve',
  component: Input,
};

export const Medium: Meta<typeof Input> = {
  args: {
    curve: 'medium',
    placeholder: 'Find Items...',
  },
};

export const Large: Meta<typeof Input> = {
  args: {
    curve: 'large',
    placeholder: 'Find Items...',
  },
};

export default meta;
