import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OptistructureTopbarComponent } from './topbar/topbar.component';
import { OptistructureSidebarComponent } from './sidebar/sidebar.component';

import { UiModule } from '@infinite-loops/ui';
import { OptistructureLandingComponent } from './landing/landing.component';
import { OptistructureProfileComponent } from './profile/profile.component';

import { AuthGuard, OutletGuard } from '@infinite-loops/auth';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: 'profile',
        component: OptistructureProfileComponent,
        canActivate: [AuthGuard, OutletGuard],
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
  ],
  // exports: [OptistructureTopbarComponent],
})
export class OptistructureUiModule {}
