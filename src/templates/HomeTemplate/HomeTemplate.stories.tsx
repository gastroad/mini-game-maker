import { Meta, StoryObj } from '@storybook/react';

import HomeTemplate, { HomeTemplateProps } from './HomeTemplate';

const meta: Meta<HomeTemplateProps> = {
  title: 'template/HomeTemplate',
  component: HomeTemplate,
};
export default meta;

type Story = StoryObj<HomeTemplateProps>;

export const Default: Story = {
  args: {},
};
