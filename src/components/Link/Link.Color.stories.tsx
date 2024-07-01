import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link/Color',
  component: Link,
};

type Story = StoryObj<typeof Link>;

export const Base: Story = {
  args: {
    children: 'Link',
    color: 'base',
    priority: 'high',
  },
};

export const Primary: Story = {
  args: {
    children: 'Link',
    color: 'primary',
    priority: 'high',
  },
};

export const Danger: Story = {
  args: {
    children: 'Link',
    color: 'danger',
    priority: 'high',
  },
};

export const Warning: Story = {
  args: {
    children: 'Link',
    color: 'warning',
    priority: 'high',
  },
};

export default meta;
