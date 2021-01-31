import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';

export interface Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSignInComponent implements OnInit {
  @Input() loading$: Observable<boolean>;
  @Output() signIn: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  @Output() googleSignIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  emitGoogleSignIn() {
    this.googleSignIn.emit(true);
  }
}
