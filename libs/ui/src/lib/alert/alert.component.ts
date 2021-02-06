import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

enum AlertType {
  Success,
  Error,
  Info,
  Warning,
}

@Component({
  selector: 'ui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Input() type: AlertType;
  @Output() dismiss: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  dclick() {
    this.dismiss.emit();
  }

  cssClass(type: AlertType) {
    switch (type) {
      case AlertType.Success:
        return 'bg-green-200';
      case AlertType.Error:
        return 'bg-red-200';
      case AlertType.Info:
        return 'bg-blue-200';
      case AlertType.Warning:
        return 'bg-orange-200';
      default:
        break;
    }
  }
}
