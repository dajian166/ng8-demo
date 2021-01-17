import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  @Input()
  title = '默认标题';
  @Output()
  helloEvent: EventEmitter<string>;

  constructor() {
    this.helloEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  sayHello(): void {
    this.helloEvent.emit(`${this.title} Say Hello!`);
  }

}
