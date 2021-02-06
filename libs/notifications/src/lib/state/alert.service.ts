import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Alert, AlertType } from './alert.model';
import { AlertStore } from './alert.store';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private alertStore: AlertStore) {}

  add(alert: Alert) {
    this.alertStore.add({ ...alert, id: guid() });
  }

  success(message: string, options?: any) {
    this.add({ ...options, type: AlertType.Success, message });
  }

  error(message: string, options?: any) {
    this.add({ ...options, type: AlertType.Error, message });
  }

  info(message: string, options?: any) {
    this.add({ ...options, type: AlertType.Info, message });
  }

  warn(message: string, options?: any) {
    this.add({ ...options, type: AlertType.Warning, message });
  }

  update(id, alert: Partial<Alert>) {
    this.alertStore.update(id, alert);
  }

  remove(id: string) {
    this.alertStore.remove(id);
  }
}
