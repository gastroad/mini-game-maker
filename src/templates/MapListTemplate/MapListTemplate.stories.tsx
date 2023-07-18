import { Meta, StoryObj } from '@storybook/react';

import MapListTemplate, { MapListTemplateProps } from './MapListTemplate';

const meta: Meta<MapListTemplateProps> = {
  title: 'template/MapListTemplate',
  component: MapListTemplate,
};
export default meta;

type Story = StoryObj<MapListTemplateProps>;

export const Default: Story = {
  args: {},
};
