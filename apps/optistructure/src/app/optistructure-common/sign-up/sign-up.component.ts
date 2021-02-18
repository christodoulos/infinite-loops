import { Component, OnInit } from '@angular/core';
import { User, AuthService, UserQuery } from '@infinite-loops/auth';

@Component({
  selector: 'infinite-loops-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  loading$ = this.userQuery.loading$;
  constructor(private authService: AuthService, private userQuery: UserQuery) {}

  ngOnInit(): void {}

  doSignUp(user: any) {
    this.authService.SignUp(user);
  }
}
