import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { AngularMaterialModules } from '../../angular-material/angular-material.module';
import { CustomCompComponent } from './custom-comp.component';


export default {
  title: 'Atoms/CustomComp',
  component: CustomCompComponent,
  decorators: [
    moduleMetadata({
      imports: [AngularMaterialModules],
    }),
  ],
} as Meta;

const Template: Story<CustomCompComponent> = (args: CustomCompComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<CustomCompComponent>;