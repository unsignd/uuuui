<div align="center">
  
![Banner](https://github.com/unsignd/uuuui/blob/master/public/banner_light.png?raw=true#gh-light-mode-only)
![Banner](https://github.com/unsignd/uuuui/blob/master/public/banner_dark.png?raw=true#gh-dark-mode-only)
# uuuui

</div>

**uuuui** is an open-source React Typescript component library.
<br/>
Anyone can use **uuuui** by installing it using `npm` or `yarn`.
<br/>
<br/>

## Install

To install `uuuui`, run one of the following commands in your project's root directory using your terminal:

```bash
# NPM
npm i @unsignd/uuuui

# YARN
yarn add @unsignd/uuuui
```

## Setup

As `uuuui` uses React contexts, `<Provider>` component should wrap others to make them work properly.

```tsx
// index.jsx
import ReactDOM from 'react-dom/client';
import { Provider } from '@unsignd/uuuui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider>{/* ... */}</Provider>);
```

```tsx
// index.tsx
import ReactDOM from 'react-dom/client';
import { Provider } from '@unsignd/uuuui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Provider>{/* ... */}</Provider>);
```

You can also specify the library's color palette and theme as `<Provider>`'s properties to override their initial values.

```tsx
// index.jsx
import ReactDOM from 'react-dom/client';
import { Provider } from '@unsignd/uuuui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider palette={/* ... */} theme="dark">
    {/* ... */}
  </Provider>
);
```

```tsx
// index.tsx
import ReactDOM from 'react-dom/client';
import { Provider } from '@unsignd/uuuui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider palette={/* ... */} theme="dark">
    {/* ... */}
  </Provider>
);
```

## Import

Import `uuuui` components you want to use from `@unsignd/uuuui`.

```tsx
import { Button /* ... */ } from '@unsignd/uuuui';
```

## Usage

For the usage of a specific component, check out the [Component](https://uuuui.vercel.app/?path=/docs/component), [Layout](https://uuuui.vercel.app/?path=/docs/layout), [Hook](https://uuuui.vercel.app/?path=/docs/hook) categories.<br />
Also, there are structures of types in the [Type](https://uuuui.vercel.app/?path=/docs/type) category.
<br />

## Troubleshooting

Refer to the [Troubleshooting](https://uuuui.vercel.app/?path=/docs/introduction-troubleshooting--docs) page for frequently occurring issues.<br />
If you have any unsolved issues, requests or further questions, free to ask through the [Github issue page](https://github.com/unsignd/uuuui/issues) or <a href="mailto:junsigndid@gmail.com">Email</a>!
