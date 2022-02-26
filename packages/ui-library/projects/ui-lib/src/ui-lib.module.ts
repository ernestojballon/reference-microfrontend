import { NgModule } from '@angular/core';
import { AngularMaterialModules } from './lib/angular-material/angular-material.module';

import { ButtonComponentComponent } from './lib/atoms/button-component/button-component.component';
import { InputComponent } from './lib/atoms/input/input.component';
import { CustomCompComponent } from './lib/atoms/custom-comp/custom-comp.component';
import { NavbarComponent } from './lib/atoms/navbar/navbar.component';
import { DatepickerComponent } from './lib/atoms/datepicker/datepicker.component';

@NgModule({
  declarations: [
    ButtonComponentComponent,
    InputComponent,
    CustomCompComponent,
    NavbarComponent,
    DatepickerComponent
  ],
  imports: [
    AngularMaterialModules
  ],
  exports: [
    ButtonComponentComponent,
    InputComponent,
    CustomCompComponent,
    NavbarComponent,
    DatepickerComponent
  ]
})
export class UiLibModule { }
