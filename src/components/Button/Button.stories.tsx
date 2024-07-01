import type { Meta } from '@storybook/react';

import Button from './Button';
import Provider from '../Provider';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export const Primary = () => <Button>Primary</Button>;
export const Secondary = () => <Button>Secondary</Button>;
export const Clickable = () => <Button>Clickable</Button>;

export default meta;