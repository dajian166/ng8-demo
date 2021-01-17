import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyViewchildRoutingModule } from './my-viewchild-routing.module';
import { MyViewchildComponent } from './my-viewchild.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChildOneComponent } from './child-one/child-one.component';


@NgModule({
  declarations: [MyViewchildComponent, ChildOneComponent],
  imports: [
    CommonModule,
    MyViewchildRoutingModule,
    NgZorroAntdModule
  ]
})
export class MyViewchildModule { }
