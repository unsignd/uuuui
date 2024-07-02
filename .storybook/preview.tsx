import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import type { Preview } from '@storybook/react';

import centered from '@storybook/addon-centered/react';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

import Provider from '../src/components/Provider';
import { useTheme } from '../src/hooks';
import { ThemeType } from '../src/types';

// force re-rendering
let counter = 0;
const reRender = () => (counter += 1);

interface StoryWrapperProps {
  children: ReactNode;
}

const Wrapper = styled.div<{
  $theme: ThemeType;
}>`
  & > div {
    background-color: ${(props) => props.theme[props.$theme]['base.100']};
  }
`;

function StoryWrapper({ children }: StoryWrapperProps) {
  const { theme } = useTheme();

  return <Wrapper $theme={theme}>{children}</Wrapper>;
}

const preview: Preview = {
  decorators: [
    centered,
    (Story) => {
      const darkMode = useDarkMode();

      useEffect(() => {
        reRender();
      }, [darkMode]);

      return (
        <Provider key={counter} theme={useDarkMode() ? 'dark' : 'light'}>
          <StoryWrapper>
            <Story />
          </StoryWrapper>
        </Provider>
      );
    },
  ],
  parameters: {
    darkMode: () => ({
      dark: { ...themes.dark, appBg: '#08080A' },
      light: { ...themes.normal, appBg: '#ffffff' },
    }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Component', 'Layout', 'Hook', 'Type'],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
