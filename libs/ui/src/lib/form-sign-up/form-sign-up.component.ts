import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Validators } from '@angular/forms';

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  photoURL?: string;
  linkedinURL?: string;
  password: string;
  confirmPassword: string;
}

// custom validator to check that two fields match https://bit.ly/3d506n3
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSignUpComponent implements OnInit {
  @ViewChild('signupform') submitFormElement;
  @Input() loading$: Observable<boolean>;
  @Output() signUp: EventEmitter<Partial<Profile> | boolean> = new EventEmitter<
    Partial<Profile> | boolean
  >();
  profileForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.profileForm = new FormGroup<Profile>(
      {
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        photoURL: new FormControl(''),
        linkedinURL: new FormControl(''),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validators: [MustMatch('password', 'confirmPassword')] }
    );
  }

  emitSignUp() {
    if (this.profileForm.valid) {
      this.signUp.emit(this.profileForm.value);
    } else {
      this.signUp.emit(false);
    }
  }
}
