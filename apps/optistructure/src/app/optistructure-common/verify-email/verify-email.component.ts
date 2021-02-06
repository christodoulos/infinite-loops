import { Component, OnInit } from '@angular/core';
import { AuthService, UserQuery } from '@infinite-loops/auth';

@Component({
  selector: 'infinite-loops-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
})
export class VerifyEmailComponent implements OnInit {
  email$ = this.userQuery.userEmail$;
  constructor(private userQuery: UserQuery, public authService: AuthService) {}

  ngOnInit(): void {}
}
