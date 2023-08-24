import { Meta, StoryObj } from '@storybook/react';
import MapTitle, { MapTitleProps } from './MapTitle';

const meta: Meta<MapTitleProps> = {
  title: 'components/atoms/MapTitle',
  component: MapTitle,
};
export default meta;

type Story = StoryObj<MapTitleProps>;

export const Default: Story = {
  args: {
    title: 'test',
  },
};
