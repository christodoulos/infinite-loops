import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MyFaIconComponent } from './fa-icon/fa-icon.component';
import { FaListItemComponent } from './fa-list-item/fa-list-item.component copy';
import { FaButtonComponent } from './fa-button/fa-button.component copy';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [MyFaIconComponent, FaListItemComponent, FaButtonComponent],
  exports: [MyFaIconComponent, FaListItemComponent, FaButtonComponent],
})
export class UiModule {}
