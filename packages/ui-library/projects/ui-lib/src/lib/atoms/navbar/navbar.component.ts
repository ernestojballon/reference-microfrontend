import { Component, Input, OnInit } from '@angular/core';



interface IAction {
  text: string,
  color: string,
  onclick:()=>void
}

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() actions: IAction[] = [
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
  ];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
