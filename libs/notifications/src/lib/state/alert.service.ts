import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Alert } from './alert.model';
import { AlertStore } from './alert.store';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private alertStore: AlertStore, private http: HttpClient) {}

  get() {
    return this.http.get<Alert[]>('https://api.com').pipe(
      tap((entities) => {
        this.alertStore.set(entities);
      })
    );
  }

  add(alert: Alert) {
    this.alertStore.add(alert);
  }

  success(message: string) {
    const alert = this.alertStore.update;
  }

  update(id: string, alert: Partial<Alert>) {
    this.alertStore.update(id, alert);
  }

  remove(id: string) {
    this.alertStore.remove(id);
  }
}
