import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStateObservable } from '@ess:single-spa:mf-store';

@Component({
   selector: 'mf-nav',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
   isLogin = false;
   actions = [
      {
         text: 'Home',
         color: 'primary',
         onclick: () => this.router.navigate(['/']),
      },
      {
         text: 'Emitter',
         color: 'warn',
         onclick: () => this.router.navigate(['/emitter']),
      },
      {
         text: 'Receiver',
         color: 'primary',
         onclick: () => this.router.navigate(['/receiver']),
      },
   ];

   constructor(private cd: ChangeDetectorRef, private router: Router) {}

   ngOnInit() {
      getStateObservable().subscribe((state: any) => {
         this.isLogin = state.auth;
         this.cd.detectChanges();
         // console.warn('user is login in nav', state);
      });
      const a = new Promise<void>((resolve, reject) => {
         setTimeout(() => {
            resolve();
         }, 1000);
      });
      // console.log("AppComponent");
   }
}
