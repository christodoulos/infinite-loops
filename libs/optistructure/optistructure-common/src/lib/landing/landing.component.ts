import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserQuery } from '@infinite-loops/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'infinite-loops-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptistructureLandingComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private UserQuery: UserQuery, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.UserQuery.loggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate([
          {
            outlets: {
              // primary: ['user', 'profile'],
              sidebar: ['user'],
              topbar: ['user'],
            },
          },
        ]);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
