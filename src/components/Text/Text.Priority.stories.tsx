import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Component/Text/Priority',
  component: Text,
};

type Story = StoryObj<typeof Text>;

export const Low: Story = {
  args: {
    children: 'Text',
    priority: 'low',
  },
};

export const Medium: Story = {
  args: {
    children: 'Text',
    priority: 'medium',
  },
};

export const High: Story = {
  args: {
    children: 'Text',
    priority: 'high',
  },
};

export default meta;
