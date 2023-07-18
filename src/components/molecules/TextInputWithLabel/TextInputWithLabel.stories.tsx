import { Meta, StoryObj } from '@storybook/react';

import TextInputWithLabel, {
  TextInputWithLabelProps,
} from './TextInputWithLabel';

const meta: Meta<TextInputWithLabelProps> = {
  title: 'components/molecules/TextInputWithLabel',
  component: TextInputWithLabel,
};
export default meta;

type Story = StoryObj<TextInputWithLabelProps>;

export const Default: Story = {
  args: {},
};
