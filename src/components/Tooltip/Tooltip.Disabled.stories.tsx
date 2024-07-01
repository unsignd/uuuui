import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';
import Button from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Component/Tooltip/Disabled',
  component: Tooltip,
};

type Story = StoryObj<typeof Tooltip>;

export const Not_Disabled: Story = {
  args: {
    children: <Button>Hover me!</Button>,
    text: 'Tag',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: <Button>Hover me!</Button>,
    text: 'Tag',
    disabled: true,
  },
};

export default meta;
