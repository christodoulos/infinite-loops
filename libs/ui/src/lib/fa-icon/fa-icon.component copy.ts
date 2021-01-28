import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  faUser,
  faSignInAlt,
  faUnlock,
  faEnvelope,
  faCloudUploadAlt,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'faicon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaIconComponent implements OnInit {
  @Input() loading$: Observable<boolean>;
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
      case 'faUser':
        return faUser;
      default:
        break;
    }
  }
}
