import type { Meta } from '@storybook/react';

import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link/Priority',
  component: Link,
};

export const Low: Meta<typeof Link> = {
  args: {
    children: 'Link',
    priority: 'low',
  },
};

export const Medium: Meta<typeof Link> = {
  args: {
    children: 'Link',
    priority: 'medium',
  },
};

export const High: Meta<typeof Link> = {
  args: {
    children: 'Link',
    priority: 'high',
  },
};

export default meta;
