import {
  Component, OnInit, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, AfterContentInit
} from '@angular/core';
import { Child11Component } from './child11/child11.component';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss']
})
export class DynamicCompComponent implements OnInit, AfterContentInit {
  // 这里引用模板里面定义的dyncomp容器标签
  @ViewChild('dyncomp', { read: ViewContainerRef, static: true })
  dyncomp: ViewContainerRef;

  comp1: ComponentRef<Child11Component>;
  comp2: ComponentRef<Child11Component>;

  constructor(
    private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('动态创建组件的实例...');
    const childComp = this.resolver.resolveComponentFactory(Child11Component);
    this.comp1 = this.dyncomp.createComponent(childComp);
    this.comp1.instance.title = '组件1';
    this.comp1.instance.btnClick.subscribe(param => {
      console.log('父组件收到：', param);
    });

    this.comp2 = this.dyncomp.createComponent(childComp);
    this.comp2.instance.title = '第二个子组件';
  }

  destoryChild(): void {
    this.comp1.destroy();
    this.comp2.destroy();
  }

}
