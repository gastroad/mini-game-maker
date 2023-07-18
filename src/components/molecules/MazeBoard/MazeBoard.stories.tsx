import { Meta, StoryObj } from '@storybook/react';

import MazeBoard, { MazeBoardProps } from './MazeBoard';

const meta: Meta<MazeBoardProps> = {
  title: 'components/molecules/MazeBoard',
  component: MazeBoard,
};
export default meta;

type Story = StoryObj<MazeBoardProps>;

export const Default: Story = {
  args: {},
};
