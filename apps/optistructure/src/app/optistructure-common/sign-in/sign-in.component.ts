import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Credentials, AuthService, UserQuery } from '@infinite-loops/auth';

@UntilDestroy()
@Component({
  selector: 'infinite-loops-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loggedIn$ = this.userQuery.loggedIn$;
  loading$ = this.userQuery.loading$;
  constructor(
    private authService: AuthService,
    private userQuery: UserQuery,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedIn$.pipe(untilDestroyed(this)).subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['user', 'profile']);
      }
    });
  }

  doGoogleSignIn() {
    this.authService.googleSignin();
  }

  doSignIn(credentials: Credentials) {
    this.authService.SignIn(credentials.username, credentials.password);
  }
}
