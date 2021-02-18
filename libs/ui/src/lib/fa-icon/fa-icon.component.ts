import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  faSignInAlt,
  faBuilding,
  faUser,
  faUserPlus,
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
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faFacebook,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'faicon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyFaIconComponent implements OnInit {
  @Input() loading$: Observable<boolean | undefined> = of(false);
  @Input() icon: string = '';
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
        return faQuestion;
    }
  }
}
