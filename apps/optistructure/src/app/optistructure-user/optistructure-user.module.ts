import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@infinite-loops/ui';

import { OptistructureUserRoutingModule } from './optistructure-user-routing.module';
import { TopbarUserComponent } from './topbar-user/topbar-user.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [TopbarUserComponent, SidebarUserComponent, ProfileComponent],
  imports: [CommonModule, UiModule, OptistructureUserRoutingModule],
})
export class OptistructureUserModule {}
