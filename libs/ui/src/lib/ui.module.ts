import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorTailorModule } from '@ngneat/error-tailor';

import {
  UIFormsErrorComponent,
  anchorErrorComponent,
} from './error-tailor.component';

import { MyFaIconComponent } from './fa-icon/fa-icon.component';
import { FaListItemComponent } from './fa-list-item/fa-list-item.component';
import { FaButtonComponent } from './fa-button/fa-button.component';
import { FormSignInComponent } from './form-sign-in/form-sign-in.component';
import { FormForgotPasswordComponent } from './form-forgot-password/form-forgot-password.component';
import { AlertComponent } from './alert/alert.component';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import { FaInputComponent } from './fa-input/fa-input.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ErrorTailorModule.forRoot({
      controlErrorComponentAnchorFn: anchorErrorComponent,
      controlErrorComponent: UIFormsErrorComponent,
      errors: {
        useValue: {
          requiredTrue: 'You must check this',
          required: 'This field is required',
          mustMatch: 'Does not match',
          email: 'This is not an email',
          minlength: ({ requiredLength, actualLength }) =>
            `Expected length of ${requiredLength} but got ${actualLength}`,
          invalidAddress: (error) => `Address isn't valid`,
        },
      },
    }),
  ],
  declarations: [
    MyFaIconComponent,
    FaListItemComponent,
    FaButtonComponent,
    FormSignInComponent,
    FormForgotPasswordComponent,
    AlertComponent,
    FormSignUpComponent,
    FaInputComponent,
  ],
  exports: [
    MyFaIconComponent,
    FaListItemComponent,
    FaButtonComponent,
    FormSignInComponent,
    FormForgotPasswordComponent,
    AlertComponent,
    FormSignUpComponent,
    FaInputComponent,
  ],
})
export class UiModule {}
