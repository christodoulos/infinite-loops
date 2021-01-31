import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '@infinite-loops/ui';
import { AuthGuard, OutletGuard } from '@infinite-loops/auth';

import { OptistructureTopbarComponent } from './topbar/topbar.component';
import { OptistructureSidebarComponent } from './sidebar/sidebar.component';
import { OptistructureLandingComponent } from './landing/landing.component';
import { OptistructureProfileComponent } from './profile/profile.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { TopbarUserComponent } from './topbar-user/topbar-user.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: '', pathMatch: 'full', component: OptistructureProfileComponent },
      {
        path: '',
        pathMatch: 'full',
        component: SidebarUserComponent,
        outlet: 'sidebar',
      },
      {
        path: '',
        pathMatch: 'full',
        component: TopbarUserComponent,
        outlet: 'topbar',
      },
      {
        path: 'profile',
        component: OptistructureProfileComponent,
        canActivate: [AuthGuard],
      },
    ]),
    UiModule,
  ],
  declarations: [
    OptistructureTopbarComponent,
    OptistructureSidebarComponent,
    OptistructureLandingComponent,
    OptistructureProfileComponent,
    SidebarUserComponent,
    TopbarUserComponent,
    NotFoundComponent,
  ],
  // exports: [OptistructureTopbarComponent],
})
export class OptistructureUiModule {}
