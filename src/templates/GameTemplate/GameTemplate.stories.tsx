import { Meta, StoryObj } from '@storybook/react';

import GameTemplate, { GameTemplateProps } from './GameTemplate';

const meta: Meta<GameTemplateProps> = {
  title: 'template/GameTemplate',
  component: GameTemplate,
};
export default meta;

type Story = StoryObj<GameTemplateProps>;

export const Default: Story = {
  args: {},
};
