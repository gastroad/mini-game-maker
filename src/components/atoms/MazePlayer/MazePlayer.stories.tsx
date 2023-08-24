import { Meta, StoryObj } from '@storybook/react';
import MazePlayer, { MazePlayerProps } from './MazePlayer';

const meta: Meta<MazePlayerProps> = {
  title: 'components/atoms/MazePlayer',
  component: MazePlayer,
};
export default meta;

type Story = StoryObj<MazePlayerProps>;

export const Start: Story = {
  args: {
    playerSize: { width: 100, height: 100 },
    player: { x: 0, y: 0 },
  },
};
