import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default',
    description: 'description default'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'basic',
  description: 'description basic'
};

export const Default: Story = (args) => <Main {...args} />;
