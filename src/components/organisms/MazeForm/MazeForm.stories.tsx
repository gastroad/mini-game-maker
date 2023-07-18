import { Meta, StoryObj } from '@storybook/react';

import MazeForm, { MazeFormProps } from './MazeForm';

const meta: Meta<MazeFormProps> = {
  title: 'components/organisms/MazeForm',
  component: MazeForm,
};
export default meta;

type Story = StoryObj<MazeFormProps>;

export const Default: Story = {
  args: {},
};
