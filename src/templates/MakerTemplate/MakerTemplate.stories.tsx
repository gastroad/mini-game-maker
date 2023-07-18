import { Meta, StoryObj } from '@storybook/react';

import MakerTemplate, { MakerTemplateProps } from './MakerTemplate';

const meta: Meta<MakerTemplateProps> = {
  title: 'template/MakerTemplate',
  component: MakerTemplate,
};
export default meta;

type Story = StoryObj<MakerTemplateProps>;

export const Default: Story = {
  args: {},
};
