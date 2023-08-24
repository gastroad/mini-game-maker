import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'components/atoms/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    onClick: action('click'),
    label: 'test',
    type: 'primary',
    active: false,
    name: 'test',
  },
};
