import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@infinite-loops/ui';

import { OptistructureCommonRoutingModule } from './optistructure-common-routing.module';
import { LandingComponent } from './landing/landing.component';
import { TopbarCommonComponent } from './topbar-common/topbar-common.component';
import { SidebarCommonComponent } from './sidebar-common/sidebar-common.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [
    LandingComponent,
    TopbarCommonComponent,
    SidebarCommonComponent,
    SignInComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    VerifyEmailComponent,
  ],
  imports: [CommonModule, UiModule, OptistructureCommonRoutingModule],
})
export class OptistructureCommonModule {}
