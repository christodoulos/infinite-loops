import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@infinite-loops/ui';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
})
export class AlertModule {}
