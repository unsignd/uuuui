import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';
import { ExampleModalContent } from '../../global';

const meta: Meta<typeof Table> = {
  title: 'Layout/Table/Header',
  component: Table,
};

type Story = StoryObj<typeof Table>;

export const Without_Header: Story = {
  args: {
    data: [
      ['John', 21, 'Loves to ride cars.'],
      ['Cho', 18, 'Has five cats.'],
      ['Moomin', 19, 'Went to the military.'],
    ],
  },
};

export const With_Header: Story = {
  args: {
    header: {
      name: {
        text: 'Name',
        sortable: true,
      },
      age: {
        text: 'Age',
        sortable: true,
      },
      description: {
        text: 'Description',
      },
    },
    data: [
      ['John', 21, 'Loves to ride cars.'],
      ['Cho', 18, 'Has five cats.'],
      ['Moomin', 19, 'Went to the military.'],
    ],
  },
};

export default meta;
