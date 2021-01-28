import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { UserStore } from './user.store';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<User> {
  user = this.getValue();
  user$ = this.select();
  loggedIn$ = this.select((state) => state.uid !== '' && state.emailVerified);
  emailVerified$ = this.select((state) => state.emailVerified);
  uid$ = this.select((state) => state.uid);
  userEmail$ = this.select((state) => state.email);
  userDisplayName$ = this.select((state) => state.displayName);
  loading$ = this.select((state) => state.loading);
  userPhotoURL$ = this.select((state) => state.photoURL);
  constructor(protected store: UserStore) {
    super(store);
  }
}
