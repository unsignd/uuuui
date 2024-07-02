import type { Meta, StoryObj } from '@storybook/react';

import useToast from '.';
import { Button } from '../../components';

interface ComponentProps {
  onClick: () => void;
}

const toast = useToast();

function Component({ onClick }: ComponentProps) {
  return <Button onClick={() => onClick()}>Click me!</Button>;
}

const meta: Meta<typeof Component> = {
  title: 'Hook/useToast',
  component: Component,
  tags: ['!autodocs'],
};

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    onClick: () => toast('Hi, this is a Toast.'),
  },
};

export const Success: Story = {
  args: {
    onClick: () => toast.success('Hi, this is a Toast.'),
  },
};

export const Error: Story = {
  args: {
    onClick: () => toast.error('Hi, this is a Toast.'),
  },
};

export const Warning: Story = {
  args: {
    onClick: () => toast.warning('Hi, this is a Toast.'),
  },
};

export default meta;
