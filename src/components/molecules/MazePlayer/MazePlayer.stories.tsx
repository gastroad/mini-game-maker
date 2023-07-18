import { Meta, StoryObj } from '@storybook/react';

import MazePlayer, { MazePlayerProps } from './MazePlayer';

const meta: Meta<MazePlayerProps> = {
  title: 'components/molecules/MazePlayer',
  component: MazePlayer,
};
export default meta;

type Story = StoryObj<MazePlayerProps>;

export const Default: Story = {
  args: {},
};
