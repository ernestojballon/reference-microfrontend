import { Component } from '@angular/core';
import { setAuth,setToken } from '@ess:single-spa:mf-store';
@Component({
  selector: 'mf-emitter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-emitter';
  login(){
        setAuth(true)
  }
  setToken(){
    setToken("dkffkdjfkdk")
}
}
