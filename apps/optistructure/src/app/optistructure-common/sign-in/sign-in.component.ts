import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import {
  Credentials,
  AuthService,
  UserQuery,
  UserService,
} from '@infinite-loops/auth';

@UntilDestroy()
@Component({
  selector: 'infinite-loops-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loading$ = this.userQuery.loading$;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private userQuery: UserQuery,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.pipe(untilDestroyed(this)).subscribe((user) => {
      if (user) {
        this.userService.updateUser(user);
        this.router.navigate(['user', 'profile']);
      }
    });
  }

  doGoogleSignIn() {
    this.authService.googleSignin();
  }

  doSignIn(credentials: Credentials) {
    this.authService.SignIn(credentials.email, credentials.password);
  }
}
