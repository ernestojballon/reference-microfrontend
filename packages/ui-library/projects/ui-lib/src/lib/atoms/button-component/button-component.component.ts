import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {
  @Input() text: string= 'Click me!';
  @Input() color: string= 'accent';
  @Input() onClick: (event:Event)=>void= ()=>{}
  @Output() click:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(event:Event){
    this.onClick(event)
  }

}
