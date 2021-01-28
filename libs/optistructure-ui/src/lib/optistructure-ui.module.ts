import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OptistructureTopbarComponent } from './topbar/topbar.component';
import { OptistructureSidebarComponent } from './sidebar/sidebar.component';

import { UiModule } from '@infinite-loops/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
    UiModule,
  ],
  declarations: [OptistructureTopbarComponent, OptistructureSidebarComponent],
  // exports: [OptistructureTopbarComponent],
})
export class OptistructureUiModule {}
