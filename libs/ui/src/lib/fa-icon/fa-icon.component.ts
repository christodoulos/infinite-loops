import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  faUser,
  faSignInAlt,
  faBuilding,
  faUnlock,
  faEnvelope,
  faCloudUploadAlt,
  faSpinner,
  faCloudDownloadAlt,
  faFileDownload,
  faTrashAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
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
      default:
        break;
    }
  }
}
