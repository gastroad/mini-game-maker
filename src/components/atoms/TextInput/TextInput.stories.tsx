import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput, { TextInputProps } from './TextInput';

const meta: Meta<TextInputProps> = {
  title: 'components/atoms/TextInput',
  component: TextInput,
};
export default meta;

type Story = StoryObj<TextInputProps>;

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
