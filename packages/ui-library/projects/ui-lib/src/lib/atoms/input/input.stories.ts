import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Atoms/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<InputComponent>;