import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '@infinite-loops/ui';

import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */

      { path: 'sign-in', component: SignInComponent },
    ]),
  ],
  declarations: [SignInComponent],
})
export class AuthModule {}
