import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import { ExampleModalContent } from '../../global';

const meta: Meta<typeof Modal> = {
  title: 'Layout/Modal/Active',
  component: Modal,
};

type Story = StoryObj<typeof Modal>;

export const Not_Active: Story = {
  args: {
    children: <ExampleModalContent />,
    title: 'Modal',
    active: false,
  },
};

export const Active: Story = {
  args: {
    children: <ExampleModalContent />,
    title: 'Modal',
    active: true,
  },
};

export default meta;
