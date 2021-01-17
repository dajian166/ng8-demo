import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyViewchildComponent } from './my-viewchild.component';


const routes: Routes = [{
  path: '', component: MyViewchildComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyViewchildRoutingModule { }
