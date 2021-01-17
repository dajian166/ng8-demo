import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyContentchildComponent } from './my-contentchild.component';


const routes: Routes = [
  { path: '', component: MyContentchildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyContentchildRoutingModule { }
