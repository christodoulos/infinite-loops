import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@infinite-loops/ui';

import { OptistructureUserRoutingModule } from './optistructure-user-routing.module';
import { TopbarUserComponent } from './topbar-user/topbar-user.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadSapComponent } from './upload-sap/upload-sap.component';
import { DropzoneDirective } from './upload-sap/dropzone.directive';
import { UploadTaskComponent } from './upload-task/upload-task.component';

@NgModule({
  declarations: [
    TopbarUserComponent,
    SidebarUserComponent,
    ProfileComponent,
    UploadSapComponent,
    DropzoneDirective,
    UploadTaskComponent,
  ],
  imports: [CommonModule, UiModule, OptistructureUserRoutingModule],
})
export class OptistructureUserModule {}
