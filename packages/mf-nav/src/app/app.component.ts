import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import {getStateObservable} from '@ess:single-spa:mf-store'

@Component({
  selector: 'mf-nav',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogin = false;
  constructor(
    private cd:ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    getStateObservable().subscribe((state:any)=>{

      this.isLogin = state.auth
      this.cd.detectChanges()
      console.log("user is login in nav",state)
    })
  }

  actions = [
    {
      text: 'Home',
      color: 'primary',
      onclick: () => this.router.navigate(['/'])
    },
    {
      text: 'Emitter',
      color: 'warn',
      onclick: () => this.router.navigate(['/emitter'])
    },
    {
      text: 'Receiver',
      color: 'primary',
      onclick: () => this.router.navigate(['/receiver'])
    }
  ]
}
