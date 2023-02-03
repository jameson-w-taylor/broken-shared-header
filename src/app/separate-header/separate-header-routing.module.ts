import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootPage } from './root/root.page';
import { ChildPage } from './child/child.page';

const routes: Routes = [
  {
    path: '',
    component: RootPage
  },
  {
    path: 'child',
    component: ChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeparateHeaderRoutingModule {}
