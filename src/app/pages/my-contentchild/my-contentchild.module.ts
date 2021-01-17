import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyContentchildRoutingModule } from './my-contentchild-routing.module';
import { MyContentchildComponent } from './my-contentchild.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ChildOneComponent } from './content-child/child-one/child-one.component';
import { ChildTwoComponent } from './content-child/child-two/child-two.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [MyContentchildComponent, ContentChildComponent, ChildOneComponent, ChildTwoComponent],
  imports: [
    CommonModule,
    MyContentchildRoutingModule,
    NgZorroAntdModule
  ]
})
export class MyContentchildModule { }
