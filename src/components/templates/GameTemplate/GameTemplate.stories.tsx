import { Meta, StoryObj } from '@storybook/react';
import GameTemplate, { GameTemplateProps } from './GameTemplate';

const meta: Meta<GameTemplateProps> = {
  title: 'components/templates/GameTemplate',
  component: GameTemplate,
};
export default meta;

type Story = StoryObj<GameTemplateProps>;

export const Default: Story = {
  args: {
    title: 'GameTemplate',
    href: '/',
  },
  render: (args) => <GameTemplate {...args}>GameTemplate</GameTemplate>,
};
