import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Button from '../../components/Button';

import { ReactComponent as TicketSVG } from '../../assets/ticket_20.svg';

const meta: Meta<typeof Modal> = {
  title: 'Layout/Modal/Active',
  component: Modal,
};

type Story = StoryObj<typeof Modal>;

export const Not_Active: Story = {
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <Input
          icon={TicketSVG}
          placeholder="Search Items..."
          style={{
            width: '100%',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text priority="low">
            © {new Date().getFullYear()} Awesome Item Search Engine
          </Text>
          <Button priority="high" color="primary">
            Search
          </Button>
        </div>
      </div>
    ),
    title: 'Modal',
    active: false,
  },
};

export const Active: Story = {
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <Input
          icon={TicketSVG}
          placeholder="Search Items..."
          style={{
            width: '100%',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text priority="low">
            © {new Date().getFullYear()} Awesome Item Search Engine
          </Text>
          <Button priority="high" color="primary">
            Search
          </Button>
        </div>
      </div>
    ),
    title: 'Modal',
    active: true,
  },
};

export default meta;
