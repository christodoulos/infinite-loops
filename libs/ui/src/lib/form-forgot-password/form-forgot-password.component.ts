import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'form-forgot-password',
  templateUrl: './form-forgot-password.component.html',
  styleUrls: ['./form-forgot-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormForgotPasswordComponent implements OnInit {
  @Input() loading$: Observable<boolean> = of(false);
  @Output() resetEmail: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitResetEmail(email: string) {
    this.resetEmail.emit(email);
  }
}
