import type { Meta } from '@storybook/react';

import Menu from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu/Options',
  component: Menu,
};

export const With_Options: Meta<typeof Menu> = {
  args: {
    options: {
      default: {
        text: 'Option',
      },
      colored: {
        text: 'Option with Color',
        color: 'danger',
      },
      disabled: {
        text: 'Disabled Option',
        disabled: true,
      },
    },
  },
};

export default meta;
