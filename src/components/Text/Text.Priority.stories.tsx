import type { Meta } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text/Priority',
  component: Text,
};

export const Low: Meta<typeof Text> = {
  args: {
    children: 'Text',
    priority: 'low',
  },
};

export const Medium: Meta<typeof Text> = {
  args: {
    children: 'Text',
    priority: 'medium',
  },
};

export const High: Meta<typeof Text> = {
  args: {
    children: 'Text',
    priority: 'high',
  },
};

export default meta;
