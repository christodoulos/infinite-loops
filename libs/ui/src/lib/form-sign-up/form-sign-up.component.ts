import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';

interface Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSignUpComponent implements OnInit {
  @Input() loading$: Observable<boolean>;
  @Output() signUp: EventEmitter<Credentials> = new EventEmitter<Credentials>();

  constructor() {}

  ngOnInit(): void {}

  emitSignUp(username: string, password: string) {
    this.signUp.emit({ username, password });
  }
}
