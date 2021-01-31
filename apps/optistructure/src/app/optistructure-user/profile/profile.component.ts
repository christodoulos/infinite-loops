import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserQuery } from '@infinite-loops/auth';

@Component({
  selector: 'infinite-loops-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  user$ = this.userQuery.user$;
  constructor(private userQuery: UserQuery) {}

  ngOnInit(): void {}
}
