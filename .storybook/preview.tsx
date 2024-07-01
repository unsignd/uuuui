import './preview.css';

import React, { useEffect, useState } from 'react';
import type { Preview } from '@storybook/react';

import centered from '@storybook/addon-centered/react';
import { useDarkMode } from 'storybook-dark-mode';

import Provider from '../src/components/Provider';
import { themes } from '@storybook/theming';

const preview: Preview = {
  decorators: [
    centered,
    (Story) => {
      return (
        <Provider theme={useDarkMode() ? 'dark' : 'light'}>
          <Story />
        </Provider>
      );
    },
  ],
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: '#08080A' },
      light: { ...themes.normal, appBg: '#ffffff' },
      darkClass: 'lights-out',
      lightClass: 'lights-on',
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
