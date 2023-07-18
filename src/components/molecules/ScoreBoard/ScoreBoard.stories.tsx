import { Meta, StoryObj } from '@storybook/react';

import ScoreBoard, { ScoreBoardProps } from './ScoreBoard';

const meta: Meta<ScoreBoardProps> = {
  title: 'components/molecules/ScoreBoard',
  component: ScoreBoard,
};
export default meta;

type Story = StoryObj<ScoreBoardProps>;

export const Default: Story = {
  args: {},
};
