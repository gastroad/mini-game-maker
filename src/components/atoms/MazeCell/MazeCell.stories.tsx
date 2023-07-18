import { Meta, StoryObj } from '@storybook/react';

import MazeCell, { MazeCellProps } from './MazeCell';

const meta: Meta<MazeCellProps> = {
  title: 'components/atoms/MazeCell',
  component: MazeCell,
};
export default meta;

type Story = StoryObj<MazeCellProps>;

export const Default: Story = {
  args: {},
};
