import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MyFaIconComponent } from './fa-icon/fa-icon.component';
import { FaListItemComponent } from './fa-list-item/fa-list-item.component copy';
import { FaButtonComponent } from './fa-button/fa-button.component copy';
import { FormSignInComponent } from './form-sign-in/form-sign-in.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [MyFaIconComponent, FaListItemComponent, FaButtonComponent, FormSignInComponent],
  exports: [MyFaIconComponent, FaListItemComponent, FaButtonComponent, FormSignInComponent],
})
export class UiModule {}
