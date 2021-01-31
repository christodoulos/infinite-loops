import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserQuery } from '@infinite-loops/auth';

@Component({
  selector: 'optistructure-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptistructureProfileComponent implements OnInit {
  user$ = this.userQuery.user$;
  constructor(private userQuery: UserQuery) {}

  ngOnInit(): void {}
}
