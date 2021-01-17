import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'app-my-viewchild',
  templateUrl: './my-viewchild.component.html',
  styleUrls: ['./my-viewchild.component.scss']
})
export class MyViewchildComponent implements OnInit, AfterViewInit {
  @ViewChild('childOne', { static: false })
  childOne: ChildOneComponent;

  @ViewChildren(ChildOneComponent)
  children: QueryList<ChildOneComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.childOne);
    setTimeout(() => {
      this.childOne.title = '标题1';
    }, 3000);

    this.children.forEach(component => {
      console.log(component.title);
      component.helloEvent.subscribe(data => {
        console.log(`收到了子组件的消息: ${data}`);
      });
    });
  }

}
