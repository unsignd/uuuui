import type { Meta } from '@storybook/react';

import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag/Color',
  component: Tag,
};

export const Base: Meta<typeof Tag> = {
  args: {
    children: 'Tag',
    color: 'base',
  },
};

export const Primary: Meta<typeof Tag> = {
  args: {
    children: 'Tag',
    color: 'primary',
  },
};

export const Danger: Meta<typeof Tag> = {
  args: {
    children: 'Tag',
    color: 'danger',
  },
};

export const Warning: Meta<typeof Tag> = {
  args: {
    children: 'Tag',
    color: 'warning',
  },
};

export default meta;
