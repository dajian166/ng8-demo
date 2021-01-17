import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {
  @Output()
  public sayhello: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public sayHello(): void {
    console.log('sayHello()');
    this.sayhello.emit('Hello DaJian');
  }

}
