import { Meta, StoryObj } from '@storybook/react';

import MazeController, { MazeControllerProps } from './MazeController';

const meta: Meta<MazeControllerProps> = {
  title: 'components/organisms/MazeController',
  component: MazeController,
};
export default meta;

type Story = StoryObj<MazeControllerProps>;

export const Default: Story = {
  args: {},
};
