import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Options',
  component: Button,
};

export const Without_Options: Meta<typeof Button> = {
  args: {
    children: 'Button',
  },
};
export const With_Options: Meta<typeof Button> = {
  args: {
    children: 'Button',
    options: {
      default: {
        text: 'Option',
      },
      disabled: {
        text: 'Disabled Option',
        disabled: true,
      },
      switch: {
        text: 'Option with Switch Button',
        type: 'switch-button',
        active: true,
      },
    },
  },
};

export default meta;
