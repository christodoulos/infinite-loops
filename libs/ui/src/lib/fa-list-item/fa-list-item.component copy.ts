import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  faSignInAlt,
  faUser,
  faUnlock,
  faEnvelope,
  faSpinner,
  faCloudUploadAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'fa-list-item',
  templateUrl: './fa-list-item.component.html',
  styleUrls: ['./fa-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaListItemComponent implements OnInit {
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
      case 'faUser':
        return faUser;
      case 'faCloudUploadAlt':
        return faCloudUploadAlt;
      default:
        break;
    }
  }
}
