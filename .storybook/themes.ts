import { create } from '@storybook/theming/create';

export const lightTheme = create({
  base: 'light',
  brandTitle: 'uuuui — React Typescript Component Library',
  brandUrl: 'https://uuuui.vercel.app',
  brandImage:
    'https://github.com/unsignd/uuuui/blob/master/public/logo_light.png?raw=true',
  brandTarget: '_self',
});

export const darkTheme = create({
  base: 'dark',
  brandTitle: 'uuuui — React Typescript Component Library',
  brandUrl: 'https://uuuui.vercel.app',
  brandImage:
    'https://github.com/unsignd/uuuui/blob/master/public/logo_dark.png?raw=true',
  brandTarget: '_self',
});
