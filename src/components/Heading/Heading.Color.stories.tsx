import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Component/Heading/Color',
  component: Heading,
};

type Story = StoryObj<typeof Heading>;

export const Base: Story = {
  args: {
    children: 'Heading',
  },
};

export default meta;
