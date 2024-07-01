import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag/Color',
  component: Tag,
};

type Story = StoryObj<typeof Tag>;

export const Base: Story = {
  args: {
    children: 'Tag',
    color: 'base',
  },
};

export const Primary: Story = {
  args: {
    children: 'Tag',
    color: 'primary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Tag',
    color: 'danger',
  },
};

export const Warning: Story = {
  args: {
    children: 'Tag',
    color: 'warning',
  },
};

export default meta;
