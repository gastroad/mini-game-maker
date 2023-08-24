import { Meta, StoryObj } from '@storybook/react';
import MakerMazeController, {
  MakerMazeControllerProps,
} from './MakerMazeController';

const meta: Meta<MakerMazeControllerProps> = {
  title: 'components/organisms/MakerMazeController',
  component: MakerMazeController,
};
export default meta;

type Story = StoryObj<MakerMazeControllerProps>;

export const Default: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/maker',
      },
    },
  },
};
export const SmallWidth: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/maker',
      },
    },
    viewport: {
      defaultViewport: 'small',
    },
  },
};
