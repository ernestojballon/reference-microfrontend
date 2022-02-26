import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { AngularMaterialModules } from '../../angular-material/angular-material.module';
import { DatepickerComponent } from './datepicker.component';


export default {
  title: 'Atoms/Datepicker',
  component: DatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [AngularMaterialModules],
    }),
  ],
} as Meta;

const Template: Story<DatepickerComponent> = (args: DatepickerComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<DatepickerComponent>;