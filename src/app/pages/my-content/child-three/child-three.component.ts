import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {
  @Output()
  public sayhello: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  sayHello(evt): void {
    console.log('sayHello()', evt);
    this.sayhello.emit('sayhello');
  }

}
