import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {getStateObservable} from '@ess:single-spa:mf-store'
@Component({
  selector: 'mf-reciever',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    getStateObservable().subscribe((value:any)=>console.log(`
    ${JSON.stringify(value)}
    `)) 
  }
  actions = [
    {
      text: 'Receiver-page1',
      color: 'primary',
      onclick: () => this.router.navigate(['/receiver/page1'])
    },
    {
      text: 'Receiver-page2',
      color: 'warn',
      onclick: () => this.router.navigate(['/receiver/page2'])
    }
  ] 
  
}
