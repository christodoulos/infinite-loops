import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Validators } from '@angular/forms';

interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSignInComponent implements OnInit {
  @Input() loading$: Observable<boolean | undefined> = of(false);
  @Output() signIn: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  @Output() googleSignIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginForm: FormGroup<Credentials>;
  constructor() {
    this.loginForm = new FormGroup<Credentials>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  emitGoogleSignIn() {
    this.googleSignIn.emit(true);
  }

  emitSignIn() {
    this.signIn.emit(<Credentials>this.loginForm.value);
  }
}
