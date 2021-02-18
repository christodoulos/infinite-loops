import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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

@Component({
  selector: 'form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSignUpComponent implements OnInit {
  @Input() loading$: Observable<boolean | undefined> = of(false);
  @Output()
  signUp: EventEmitter<Partial<Profile>> = new EventEmitter<Partial<Profile>>();
  profileForm: FormGroup;
  constructor() {
    this.profileForm = new FormGroup<Profile>({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      photoURL: new FormControl(''),
      linkedinURL: new FormControl(''),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });

    const passwordValidator = combineLatest([
      this.profileForm.select((state) => state.password),
      this.profileForm.select((state) => state.confirmPassword),
    ]).pipe(
      map(([password, confirmPassword]) => {
        if (password !== confirmPassword)
          this.profileForm
            .getControl('confirmPassword')
            .setErrors({ mustMatch: true });
        return password === confirmPassword ? null : { mustMatch: true };
      })
    );

    this.profileForm.validateOn(passwordValidator);
  }

  ngOnInit(): void {}

  emitSignUp() {
    this.signUp.emit(this.profileForm.value);
  }
}
