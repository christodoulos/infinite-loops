import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  OptistructureTopbarComponent,
  OptistructureSidebarComponent,
  OptistructureLandingComponent,
  SidebarUserComponent,
  TopbarUserComponent,
  NotFoundComponent,
} from '@infinite-loops/optistructure/optistructure-common';

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
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
