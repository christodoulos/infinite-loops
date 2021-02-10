import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonGuard } from './common.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingComponent } from './landing/landing.component';
import { SidebarCommonComponent } from './sidebar-common/sidebar-common.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TopbarCommonComponent } from './topbar-common/topbar-common.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {
    path: '',
    component: TopbarCommonComponent,
    outlet: 'topbar',
  },
  {
    path: '',
    component: SidebarCommonComponent,
    outlet: 'sidebar',
  },
  { path: 'sign-in', component: SignInComponent, canActivate: [CommonGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [CommonGuard] },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    canActivate: [CommonGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [CommonGuard],
  },
  { path: '**', component: LandingComponent, canActivate: [CommonGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptistructureCommonRoutingModule {}
