import React from 'react';
import type { Preview } from '@storybook/react';

import centered from '@storybook/addon-centered/react';
import { useDarkMode } from 'storybook-dark-mode';

import Provider from '../src/components/Provider';

const preview: Preview = {
  decorators: [
    centered,
    (Story) => {
      if (useDarkMode()) {
        return (
          <Provider theme="dark">
            <Story />
          </Provider>
        );
      } else {
        return (
          <Provider theme="light">
            <Story />
          </Provider>
        );
      }
    },
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
