import { Injectable } from '@angular/core';
import firebase from 'firebase/app'; // According to https://bit.ly/34j8dHw
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { resetStores } from '@datorama/akita';

import { User } from './state/user.model';
import { UserService } from './state/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  constructor(
    private router: Router,
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    console.log('IN AUTH SERVICE');
    // this.signOut();
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const { uid, email, displayName, photoURL, emailVerified } = user;
        const data = { uid, email, displayName, photoURL, emailVerified };
        this.userService.updateUser(data);
        this.user = data;
      } else {
        console.log('LOGGED OUT');
      }
    });
  }

  // Forgot password
  async ForgotPassword(passwordResetEmail: string) {
    this.userService.setUserLoading(true);
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
      window.alert(error);
    }
    this.userService.setUserLoading(false);
  }

  async googleSignin() {
    this.userService.setUserLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider(); // https://bit.ly/3p9dABj
    const credential = await this.afAuth.signInWithPopup(provider);
    this.userService.setUserLoading(false);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    resetStores();
    this.router.navigate(['']);
  }

  private updateUserData({ uid, email, displayName, photoURL, emailVerified }) {
    const data = { uid, email, displayName, photoURL, emailVerified };
    this.userService.updateUser({ ...data });
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${uid}`
    );
    return userRef.set(data, { merge: true });
  }

  get isLoggedIn(): boolean {
    const ls = JSON.parse(localStorage.getItem('AkitaStores'));
    const user = ls.user;
    if (user !== undefined)
      return user !== null && user.emailVerified !== false ? true : false;
  }
}
