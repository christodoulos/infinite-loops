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

import { AlertService } from '@infinite-loops/notifications';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  constructor(
    private router: Router,
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private alertService: AlertService
  ) {
    console.log('IN AUTH SERVICE');
    // this.signOut();
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        console.log('LOGGED IN');
        const { uid, email, displayName, photoURL, emailVerified } = user;
        const data = { uid, email, displayName, photoURL, emailVerified };
        this.userService.updateUser(data);
        this.user = data;
      } else {
        console.log('LOGGED OUT');
      }
    });
  }

  // Sign in with email/password
  async SignIn(email: string, password: string) {
    this.userService.setUserLoading(true);
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      if (!result.user.emailVerified)
        this.alertService.error(
          'You should verify your email first! Check your mailbox: ' +
            result.user.email
        );
      this.updateUserData(result.user);
    } catch (error) {
      this.userService.setUserLoading(false);
      this.alertService.error(error.message, { autoclose: true });
    }
  }

  // Sign up with email/password
  async SignUp(email: string, password: string) {
    this.userService.setUserLoading(true);
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      (await this.afAuth.currentUser).sendEmailVerification().then(() => {
        this.alertService.success(
          `We have sent a confirmation email to ${result.user.email}. 
          Please check your email and click on the link to verify your email address.`
        );
      });
      this.updateUserData(result.user);
    } catch (error) {
      this.alertService.error(error.message);
    }
    this.userService.setUserLoading(false);
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    (await this.afAuth.currentUser).sendEmailVerification().then(() => {
      this.router.navigate(['verify-email']);
    });
  }

  // Forgot password
  async ForgotPassword(passwordResetEmail: string) {
    this.userService.setUserLoading(true);
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      this.alertService.success('Password reset email sent, check your inbox.');
    } catch (error) {
      this.alertService.error(error.message, { autoclose: true });
    }
    this.userService.setUserLoading(false);
  }

  async googleSignin() {
    this.userService.setUserLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider(); // https://bit.ly/3p9dABj
    await this.afAuth.signInWithPopup(provider);
    this.userService.setUserLoading(false);
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
