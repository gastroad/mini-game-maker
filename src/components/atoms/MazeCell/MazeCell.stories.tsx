import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MazeCell, { MazeCellProps } from './MazeCell';

const meta: Meta<MazeCellProps> = {
  title: 'components/atoms/MazeCell',
  component: MazeCell,
};
export default meta;

type Story = StoryObj<MazeCellProps>;

export const Start: Story = {
  args: {
    type: 'start',
    col: 1,
    row: 1,
    handleMazeCellClick: action('click'),
  },
  render: (args) => (
    <div style={{ display: 'grid', width: '300px', height: '300px' }}>
      <MazeCell {...args} />
    </div>
  ),
};
