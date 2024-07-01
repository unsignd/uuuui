import type { Meta } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text/Color',
  component: Text,
};

export const Base: Meta<typeof Text> = {
  args: {
    children: 'Text',
    color: 'base',
  },
};

export const Primary: Meta<typeof Text> = {
  args: {
    children: 'Text',
    color: 'primary',
  },
};

export const Danger: Meta<typeof Text> = {
  args: {
    children: 'Text',
    color: 'danger',
  },
};

export const Warning: Meta<typeof Text> = {
  args: {
    children: 'Text',
    color: 'warning',
  },
};

export default meta;
