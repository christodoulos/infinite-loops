import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MyFaIconComponent } from './fa-icon/fa-icon.component';
import { FaListItemComponent } from './fa-list-item/fa-list-item.component copy';
import { FaButtonComponent } from './fa-button/fa-button.component copy';
import { FormSignInComponent } from './form-sign-in/form-sign-in.component';
import { FormForgotPasswordComponent } from './form-forgot-password/form-forgot-password.component';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  declarations: [
    MyFaIconComponent,
    FaListItemComponent,
    FaButtonComponent,
    FormSignInComponent,
    FormForgotPasswordComponent,
  ],
  exports: [
    MyFaIconComponent,
    FaListItemComponent,
    FaButtonComponent,
    FormSignInComponent,
    FormForgotPasswordComponent,
  ],
})
export class UiModule {}
