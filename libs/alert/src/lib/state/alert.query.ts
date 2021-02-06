import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AlertStore, AlertState } from './alert.store';

@Injectable({ providedIn: 'root' })
export class AlertQuery extends QueryEntity<AlertState> {

  constructor(protected store: AlertStore) {
    super(store);
  }

}
