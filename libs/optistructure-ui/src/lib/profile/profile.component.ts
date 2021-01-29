import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserQuery } from '@infinite-loops/auth';

@Component({
  selector: 'optistructure-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptistructureProfileComponent implements OnInit {
  user$ = this.userQuery.user$;
  constructor(private route: ActivatedRoute, private userQuery: UserQuery) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data); // this is returning an empty object {}
    });
  }
}
