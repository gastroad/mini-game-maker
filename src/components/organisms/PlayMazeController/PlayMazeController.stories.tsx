import { Meta, StoryObj } from '@storybook/react';
import PlayMazeController, {
  PlayMazeControllerProps,
} from './PlayMazeController';

const meta: Meta<PlayMazeControllerProps> = {
  title: 'components/organisms/PlayMazeController',
  component: PlayMazeController,
};
export default meta;

type Story = StoryObj<PlayMazeControllerProps>;

export const Default: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/player',
      },
    },
  },
};
