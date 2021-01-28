import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OptistructureTopbarComponent } from './topbar/topbar.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [OptistructureTopbarComponent],
  exports: [OptistructureTopbarComponent],
})
export class OptistructureUiModule {}
