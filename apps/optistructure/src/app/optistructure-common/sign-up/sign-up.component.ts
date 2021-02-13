import { Component, OnInit } from '@angular/core';
import { User, AuthService, UserQuery } from '@infinite-loops/auth';
import { AlertService } from '@infinite-loops/notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'infinite-loops-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  loading$ = this.userQuery.loading$;
  constructor(
    private authService: AuthService,
    private userQuery: UserQuery,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  doSignUp(user: User) {
    if (!user) {
      this.alertService.error('There are errors. We cannot sign you up!', {
        autoclose: true,
      });
    } else {
      this.authService.SignUp(user);
      // this.authService.SignUp(credentials.username, credentials.password);
      // this.router.navigate(['sign-in']);
    }
  }
}
