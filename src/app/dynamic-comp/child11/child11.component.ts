import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.scss']
})
export class Child11Component implements OnInit, OnDestroy {
  @Input()
  title = '默认的标题';

  @Output()
  btnClick: EventEmitter<string>;

  constructor() {
    this.btnClick = new EventEmitter();
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()', this.title);
  }

  public triggerEvent(): void {
    this.btnClick.emit('第一个子组件的点击事件...');
  }

}
