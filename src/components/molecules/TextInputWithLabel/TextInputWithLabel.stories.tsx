import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
  args: {
    value: 'test',
    placeholder: 'test',
    onChange: action('change'),
    onKeyDown: action('keydown'),
    type: 'text',
    name: 'test',
  },
};
export const Placeholder: Story = {
  args: {
    value: '',
    placeholder: 'test',
    onChange: action('change'),
    onKeyDown: action('keydown'),
    type: 'text',
    name: 'test',
  },
};
