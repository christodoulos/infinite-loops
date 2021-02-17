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
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  subscription!: Subscription;
  user!: User;
  constructor(
    private router: Router,
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private alertService: AlertService
  ) {
    console.log('IN AUTH SERVICE');
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        console.log(`\t${user.email} is LOGGED IN`);

        // subscribes to local user information to merge with auth user
        // should unsubscribe before logout
        this.subscription = this.afs
          .collection('/users/')
          .doc(user.uid)
          .valueChanges()
          .subscribe((luser: any) => {
            const {
              uid = '',
              email = '',
              firstName = '',
              lastName = '',
              displayName = '',
              linkedinURL = '',
              photoURL = '',
              emailVerified = false,
            } = { ...user, ...luser };
            const data = {
              uid,
              email,
              firstName,
              lastName,
              displayName,
              linkedinURL,
              photoURL,
              emailVerified,
            };
            this.userService.updateUser(data);
            this.user = data;
            // console.log(luser);
          });
      } else {
        console.log('\tLOGGED OUT');
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
      if (result.user) {
        if (!result.user.emailVerified)
          this.alertService.error(
            'You should verify your email first! Check your mailbox: ' +
              result.user.email
          );
        this.updateUserData(result.user);
      }
    } catch (error) {
      this.userService.setUserLoading(false);
      this.alertService.error(error.message, { autoclose: true });
    }
  }

  // Sign up with email/password
  async SignUp(user: any) {
    console.log('SIGNUP', user);
    // user as received from signup form, should support at least
    // .firstName, .lastName, .email and .password
    this.userService.setUserLoading(true);
    try {
      // https://bit.ly/3tVkME2 by Sterling Archer
      await this.afAuth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userData) => {
          if (userData.user)
            userData.user
              .updateProfile({
                displayName: `${user.firstName} ${user.lastName}`,
              })
              .then(() => {
                if (userData.user)
                  userData.user.sendEmailVerification().then(() => {
                    this.alertService.success(
                      `We have sent a confirmation email to ${user.email}. 
                  Please check your email and click on the link to verify your email address.`
                    );
                  });
                this.onSignUpUpdateUserData({ ...userData.user, ...user });
              });
        });
    } catch (error) {
      this.alertService.error(error.message, { autoclose: true });
    }
    this.userService.setUserLoading(false);
  }

  // Send email verfificaiton when new user sign up
  // async SendVerificationMail() {
  //   (await this.afAuth.currentUser).sendEmailVerification().then(() => {
  //     this.router.navigate(['verify-email']);
  //   });
  // }

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
    this.subscription.unsubscribe();
    await this.afAuth.signOut();
    resetStores();
    this.router.navigate(['']);
  }

  private onSignUpUpdateUserData(user: any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      linkedinURL: user.linkedinURL,
      emailVerified: user.emailVerified,
    };
    console.log('AUTH Service', userData);
    this.userService.updateUser(userData);
    return userRef.set(userData, { merge: true });
  }

  // private updateUserData({ uid, email, displayName, photoURL, emailVerified }) {
  private updateUserData(user: firebase.User) {
    const data = {
      uid: user.uid || '',
      email: user.email || '',
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      emailVerified: user.emailVerified || false,
    };
    this.userService.updateUser({ ...data });
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    return userRef.set(data, { merge: true });
  }

  get isLoggedIn(): boolean {
    const ls = localStorage.getItem('AkitaStores');
    if (ls) {
      const user = JSON.parse(ls).user;
      if (user !== undefined)
        return user !== null && user.emailVerified !== false ? true : false;
    }
    return false;
  }
}
