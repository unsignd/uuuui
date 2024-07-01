import type { Meta } from '@storybook/react';

import Menu from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu/Curve',
  component: Menu,
};

export const Medium: Meta<typeof Menu> = {
  args: {
    options: {
      option_1: {
        text: 'Option 1',
      },
      option_2: {
        text: 'Option 2',
      },
      option_3: {
        text: 'Option 3',
      },
    },
    curve: 'medium',
  },
};

export const Large: Meta<typeof Menu> = {
  args: {
    options: {
      option_1: {
        text: 'Option 1',
      },
      option_2: {
        text: 'Option 2',
      },
      option_3: {
        text: 'Option 3',
      },
    },
    curve: 'large',
  },
};

export default meta;
