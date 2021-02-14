import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@infinite-loops/auth';

import { ProfileComponent } from './profile/profile.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { TopbarUserComponent } from './topbar-user/topbar-user.component';
import { UploadSapComponent } from './upload-sap/upload-sap.component';

const routes: Routes = [
  { path: '', component: TopbarUserComponent, outlet: 'topbar' },
  { path: '', component: SidebarUserComponent, outlet: 'sidebar' },
  // { path: '', redirectTo: '/user/profile' },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'upload-model',
    component: UploadSapComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/user/profile' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptistructureUserRoutingModule {}
