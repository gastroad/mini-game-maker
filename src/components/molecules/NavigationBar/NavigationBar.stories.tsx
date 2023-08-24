import { Meta, StoryObj } from '@storybook/react';
import NavigationBar, { NavigationBarProps } from './NavigationBar';

const meta: Meta<NavigationBarProps> = {
  title: 'components/molecules/NavigationBar',
  component: NavigationBar,
};
export default meta;

type Story = StoryObj<NavigationBarProps>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <NavigationBar {...args}>
      <>NavigationBar</>
    </NavigationBar>
  ),
};
