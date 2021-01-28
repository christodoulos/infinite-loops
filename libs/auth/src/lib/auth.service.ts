import { Injectable } from '@angular/core';
import firebase from 'firebase/app'; // According to https://bit.ly/34j8dHw
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

import { User } from './state/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    console.log('IN AUTH SERVICE');
    this.afAuth.authState.pipe();
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider(); // https://bit.ly/3p9dABj
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData({ uid, email, displayName, photoURL, emailVerified }) {
    const data = { uid, email, displayName, photoURL, emailVerified };
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${uid}`
    );
    return userRef.set(data, { merge: true });
  }
}
