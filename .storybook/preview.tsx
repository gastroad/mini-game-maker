import React from 'react';
import { RecoilRoot } from 'recoil';
import type { Preview } from '@storybook/react';

const customViewports = {
  lage: {
    name: 'lage',
  },
  small: {
    name: 'small',
    styles: {
      width: '480px',
      height: '100%',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: 'rgb(53, 54, 58);',
        },
      ],
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'lage',
    },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};

export default preview;
