import type { Meta } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading/Color',
  component: Heading,
};

export const Base: Meta<typeof Heading> = {
  args: {
    children: 'Heading',
  },
};

export default meta;
