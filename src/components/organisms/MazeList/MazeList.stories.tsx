import { Meta, StoryObj } from '@storybook/react';

import MazeList, { MazeListProps } from './MazeList';

const meta: Meta<MazeListProps> = {
  title: 'components/organisms/MazeList',
  component: MazeList,
};
export default meta;

type Story = StoryObj<MazeListProps>;

export const Default: Story = {
  args: {},
};
