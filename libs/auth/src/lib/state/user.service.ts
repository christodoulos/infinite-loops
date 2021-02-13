import { Injectable } from '@angular/core';
import { UserStore } from './user.store';
import { User, createInitialUser } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore) {
    console.log('AUTH STATE - USER SERVICE');
  }

  setUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    this.userStore.update(JSON.parse(user));
  }

  setUserLoading(value: boolean) {
    this.userStore.update({ loading: value });
  }

  updateUser(user: Partial<User>) {
    this.userStore.update({ ...user, loading: false });
  }

  initializeUser() {
    this.userStore.update({ ...createInitialUser() });
  }
}
