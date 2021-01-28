import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MyFaIconComponent } from './fa-icon/fa-icon.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [MyFaIconComponent],
  exports: [MyFaIconComponent],
})
export class UiModule {}
