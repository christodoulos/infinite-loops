import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingComponent } from './landing/landing.component';
import { SidebarCommonComponent } from './sidebar-common/sidebar-common.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TopbarCommonComponent } from './topbar-common/topbar-common.component';

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
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptistructureCommonRoutingModule {}
