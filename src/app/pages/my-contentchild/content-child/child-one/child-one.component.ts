import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit, AfterContentInit {
  @ContentChild(ChildTwoComponent, { static: true })
  childTwo: ChildTwoComponent;

  // 这时候不是单个组件，是一个列表了 QueryList
  @ContentChildren(ChildTwoComponent)
  childrenTwo: QueryList<ChildTwoComponent>;

  constructor() { }

  ngOnInit() {
  }

  /**
   * 在 ngAfterContentInit 钩子里面访问被投影进来的组件
   */
  ngAfterContentInit(): void {
    console.log('在 ngAfterContentInit 钩子里面访问被投影进来的组件', this.childTwo);

    this.childrenTwo.forEach((item) => {
      console.log(item);
    });
  }

  sayHello(): void {
    this.childTwo.sayHello();
  }

}
