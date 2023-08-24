import { Meta, StoryObj } from '@storybook/react';
import PlayScoreBoard, { PlayScoreBoardProps } from './PlayScoreBoard';

const meta: Meta<PlayScoreBoardProps> = {
  title: 'components/organisms/PlayScoreBoard',
  component: PlayScoreBoard,
};
export default meta;

type Story = StoryObj<PlayScoreBoardProps>;

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
