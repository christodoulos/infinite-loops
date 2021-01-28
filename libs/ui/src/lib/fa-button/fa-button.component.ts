import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'fa-button',
  templateUrl: './fa-button.component.html',
  styleUrls: ['./fa-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaButtonComponent implements OnInit {
  @Input() loading$: Observable<boolean>;
  @Input() text: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit(): void {}
}
