import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text/Color',
  component: Text,
};

type Story = StoryObj<typeof Text>;

export const Base: Story = {
  args: {
    children: 'Text',
    color: 'base',
  },
};

export const Primary: Story = {
  args: {
    children: 'Text',
    color: 'primary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Text',
    color: 'danger',
  },
};

export const Warning: Story = {
  args: {
    children: 'Text',
    color: 'warning',
  },
};

export default meta;
