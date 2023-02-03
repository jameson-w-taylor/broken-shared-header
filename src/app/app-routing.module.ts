import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'separate-header',
    pathMatch: 'full'
  },
  {
    path: 'separate-header',
    loadChildren: () => import('./separate-header/separate-header.module').then( m => m.SeparateHeaderModule)
  },
  {
    path: 'shared-header',
    loadChildren: () => import('./shared-header/shared-header.module').then( m => m.SharedHeaderModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
