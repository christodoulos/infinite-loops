import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserQuery } from '@infinite-loops/auth';

@Component({
  selector: 'infinite-loops-topbar-user',
  templateUrl: './topbar-user.component.html',
  styleUrls: ['./topbar-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarUserComponent implements OnInit {
  user$ = this.userQuery.user$;
  constructor(private userQuery: UserQuery) {}

  ngOnInit(): void {}
}
