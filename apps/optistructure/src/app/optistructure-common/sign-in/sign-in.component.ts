import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserQuery } from '@infinite-loops/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'infinite-loops-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit, OnDestroy {
  user$ = this.userQuery.user$;
  private subscription: Subscription;
  constructor(
    private authService: AuthService,
    private userQuery: UserQuery,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.user$.subscribe((user) => {
      if (user) {
        this.router.navigate(['user', 'profile']);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  doGoogleSignIn() {
    this.authService.googleSignin();
  }
}
