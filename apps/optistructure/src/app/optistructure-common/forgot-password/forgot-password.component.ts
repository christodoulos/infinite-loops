import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserQuery } from '@infinite-loops/auth';

@Component({
  selector: 'infinite-loops-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  loading$ = this.userQuery.loading$;
  constructor(
    private userQuery: UserQuery,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendResetEmail(email: string) {
    this.authService.ForgotPassword(email);
    this.router.navigate(['log-in']);
  }
}
