import { Meta, StoryObj } from '@storybook/react';

import MazeListItem, { MazeListItemProps } from './MazeListItem';

const meta: Meta<MazeListItemProps> = {
  title: 'components/molecules/MazeListItem',
  component: MazeListItem,
};
export default meta;

type Story = StoryObj<MazeListItemProps>;

export const Default: Story = {
  args: {},
};
