import { Meta, StoryObj } from '@storybook/react';
import MakerMazeForm, { MakerMazeFormProps } from './MakerMazeForm';

const meta: Meta<MakerMazeFormProps> = {
  title: 'components/organisms/MakerMazeForm',
  component: MakerMazeForm,
};
export default meta;

type Story = StoryObj<MakerMazeFormProps>;

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
