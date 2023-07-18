import { Meta, StoryObj } from '@storybook/react';

import MazeMaker, { MazeMakerProps } from './MazeMaker';

const meta: Meta<MazeMakerProps> = {
  title: 'components/organisms/MazeMaker',
  component: MazeMaker,
};
export default meta;

type Story = StoryObj<MazeMakerProps>;

export const Default: Story = {
  args: {},
};
