import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  faSignInAlt,
  faUnlock,
  faEnvelope,
  faCloudUploadAlt,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
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
  faSpinner = faSpinner;

  constructor() {}

  ngOnInit(): void {}

  get faIcon() {
    switch (this.icon) {
      case 'faUnlock':
        return faUnlock;
      case 'faEnvelope':
        return faEnvelope;
      case 'faCloudUploadAlt':
        return faCloudUploadAlt;
      default:
        break;
    }
  }
}
