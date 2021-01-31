import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./optistructure-user/optistructure-user.module').then(
        (m) => m.OptistructureUserModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./optistructure-common/optistructure-common.module').then(
        (m) => m.OptistructureCommonModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
