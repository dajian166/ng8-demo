import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  }, {
    path: 'my-content',
    loadChildren: () => import('./pages/my-content/my-content.module').then(m => m.MyContentModule)
  }, {
    path: 'my-contentchild',
    loadChildren: () => import('./pages/my-contentchild/my-contentchild.module').then(m => m.MyContentchildModule)
  }, {
    path: 'my-viewchild',
    loadChildren: () => import('./pages/my-viewchild/my-viewchild.module').then(m => m.MyViewchildModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
