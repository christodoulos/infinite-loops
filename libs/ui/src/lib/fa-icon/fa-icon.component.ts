import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  faUser,
  faUserPlus,
  faSignInAlt,
  faBuilding,
  faUnlock,
  faEnvelope,
  faCloudUploadAlt,
  faSpinner,
  faCloudDownloadAlt,
  faFileDownload,
  faTrashAlt,
  faSignOutAlt,
  faTrash,
  faTimes,
  faHandshake,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faFacebook,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'faicon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyFaIconComponent implements OnInit {
  @Input() loading$: Observable<boolean>;
  @Input() icon: string;
  faSpinner = faSpinner;
  constructor() {}

  ngOnInit(): void {}

  get fa_icon() {
    switch (this.icon) {
      case 'faUnlock':
        return faUnlock;
      case 'faEnvelope':
        return faEnvelope;
      case 'faCloudUploadAlt':
        return faCloudUploadAlt;
      case 'faCloudDownloadAlt':
        return faCloudDownloadAlt;
      case 'faUser':
        return faUser;
      case 'faBuilding':
        return faBuilding;
      case 'faTrashAlt':
        return faTrashAlt;
      case 'faFileDownload':
        return faFileDownload;
      case 'faSignInAlt':
        return faSignInAlt;
      case 'faUserPlus':
        return faUserPlus;
      case 'faSignOutAlt':
        return faSignOutAlt;
      case 'faTimes':
        return faTimes;
      case 'faTrash':
        return faTrash;
      case 'faHandshake':
        return faHandshake;
      case 'faLinkedin':
        return faLinkedinIn;
      case 'faKey':
        return faKey;
      default:
        break;
    }
  }
}
