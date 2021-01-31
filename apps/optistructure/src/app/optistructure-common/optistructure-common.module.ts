import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@infinite-loops/ui';

import { OptistructureCommonRoutingModule } from './optistructure-common-routing.module';
import { LandingComponent } from './landing/landing.component';
import { TopbarCommonComponent } from './topbar-common/topbar-common.component';
import { SidebarCommonComponent } from './sidebar-common/sidebar-common.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    LandingComponent,
    TopbarCommonComponent,
    SidebarCommonComponent,
    SignInComponent,
  ],
  imports: [CommonModule, UiModule, OptistructureCommonRoutingModule],
})
export class OptistructureCommonModule {}
