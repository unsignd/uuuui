import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';
import Button from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Component/Tooltip/Color',
  component: Tooltip,
};

type Story = StoryObj<typeof Tooltip>;

export const Base: Story = {
  args: {
    children: <Button>Hover me!</Button>,
    text: 'Tag',
    color: 'base',
  },
};

export const Primary: Story = {
  args: {
    children: <Button>Hover me!</Button>,
    text: 'Tag',
    color: 'primary',
  },
};

export const Danger: Story = {
  args: {
    children: <Button>Hover me!</Button>,
    text: 'Tag',
    color: 'danger',
  },
};

export const Warning: Story = {
  args: {
    children: <Button>Hover me!</Button>,
    text: 'Tag',
    color: 'warning',
  },
};

export default meta;
