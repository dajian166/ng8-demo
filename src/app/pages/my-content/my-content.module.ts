import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyContentRoutingModule } from './my-content-routing.module';
import { MyContentComponent } from './my-content.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';


@NgModule({
  declarations: [MyContentComponent, ChildTwoComponent, ChildThreeComponent],
  imports: [
    CommonModule,
    MyContentRoutingModule,
    NgZorroAntdModule
  ]
})
export class MyContentModule { }
