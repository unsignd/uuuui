import type { Meta } from '@storybook/react';

import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link/Color',
  component: Link,
};

export const Base: Meta<typeof Link> = {
  args: {
    children: 'Link',
    color: 'base',
    priority: 'high',
  },
};

export const Primary: Meta<typeof Link> = {
  args: {
    children: 'Link',
    color: 'primary',
    priority: 'high',
  },
};

export const Danger: Meta<typeof Link> = {
  args: {
    children: 'Link',
    color: 'danger',
    priority: 'high',
  },
};

export const Warning: Meta<typeof Link> = {
  args: {
    children: 'Link',
    color: 'warning',
    priority: 'high',
  },
};

export default meta;
