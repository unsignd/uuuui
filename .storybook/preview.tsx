import React from 'react';
import type { Preview } from '@storybook/react';

import centered from '@storybook/addon-centered/react';
import Provider from '../src/components/Provider';

const preview: Preview = {
  decorators: [
    centered,
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
