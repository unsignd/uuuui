import type { Meta, StoryObj } from '@storybook/react';

import useTheme from '.';
import { Button } from '../../components';

interface ComponentProps {}

function Component({}: ComponentProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Click me!
    </Button>
  );
}

const meta: Meta<typeof Component> = {
  title: 'Hook/useTheme()',
  component: Component,
  tags: ['!autodocs'],
};

type Story = StoryObj<typeof Component>;

export const Theme_Switch: Story = {
  args: {},
};

export default meta;
