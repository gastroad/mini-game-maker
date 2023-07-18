import { Meta, StoryObj } from '@storybook/react';

import MazeGame, { MazeGameProps } from './MazeGame';

const meta: Meta<MazeGameProps> = {
  title: 'components/organisms/MazeGame',
  component: MazeGame,
};
export default meta;

type Story = StoryObj<MazeGameProps>;

export const Default: Story = {
  args: {},
};
