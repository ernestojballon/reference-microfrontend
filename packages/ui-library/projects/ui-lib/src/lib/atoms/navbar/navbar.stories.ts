import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { AngularMaterialModules } from '../../angular-material/angular-material.module';
import { ButtonComponentComponent } from '../button-component/button-component.component';

export default {
  title: 'Atoms/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ButtonComponentComponent],
      imports: [
        AngularMaterialModules],
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  actions: [
    {
      text: 'Home',
      color: 'primary',
      onclick: () => {
        console.log('Home');
      }
    },
    {
      text: 'About',
      color: 'primary',
      onclick: () => {
        console.log('About');
      }
    }
  ] 
} as Partial<NavbarComponent>;

