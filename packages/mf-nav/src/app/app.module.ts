import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiLibModule } from 'ui-lib';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, AppRoutingModule, UiLibModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
