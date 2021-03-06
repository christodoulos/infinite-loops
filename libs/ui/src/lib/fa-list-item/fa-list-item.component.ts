import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'fa-list-item',
  templateUrl: './fa-list-item.component.html',
  styleUrls: ['./fa-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaListItemComponent implements OnInit {
  @Input() loading$: Observable<boolean> = of(false);
  @Input() text: string = '';
  @Input() icon: string = '';
  constructor() {}

  ngOnInit(): void {}
}
