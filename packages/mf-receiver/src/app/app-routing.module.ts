import { APP_BASE_HREF } from '@angular/common';​

import { NgModule } from '@angular/core';​

import { RouterModule, Routes } from '@angular/router';​
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';

import { EmptyRouteComponent } from './empty-route/empty-route.component';​

​
const routes: Routes = [
    { path: "receiver/page1" , component: Page1Component },
    { path: "receiver/page2" , component: Page2Component },
    { path: "**" , component: EmptyRouteComponent }
];​

​
@NgModule({​

imports: [RouterModule.forRoot(routes)],​

exports: [RouterModule],​

providers: [{ provide: APP_BASE_HREF, useValue: "/" }],​

})​

export class AppRoutingModule { }​

​