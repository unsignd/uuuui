import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link/Priority',
  component: Link,
};

type Story = StoryObj<typeof Link>;

export const Low: Story = {
  args: {
    children: 'Link',
    priority: 'low',
  },
};

export const Medium: Story = {
  args: {
    children: 'Link',
    priority: 'medium',
  },
};

export const High: Story = {
  args: {
    children: 'Link',
    priority: 'high',
  },
};

export default meta;
