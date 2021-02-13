import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType, AlertQuery, AlertService } from '../state';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts$ = this.alertQuery.selectAll();

  alertSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(
    private router: Router,
    private alertQuery: AlertQuery,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.alertSubscription = this.alertQuery.selectAll().subscribe((alerts) => {
      alerts.forEach((alert) => {
        if (alert.autoclose) {
          setTimeout(() => {
            this.alertService.remove(alert.id);
          }, 5000);
        }
      });
    });

    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.alertService.remove(this.id);
      }
    });
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  // removeAlert(alert: Alert) {
  //   if (!this.alertQuery.hasEntity(alert)) return;

  //   if (this.fade) {
  //     this.alertQuery.getEntity(alert.id).fade = true;
  //     setTimeout(() => {
  //       this.alertService.remove(alert.id);
  //     }, 250);
  //   } else {
  //     this.alertService.remove(alert.id);
  //   }
  // }

  dismiss(id: string) {
    this.alertService.remove(id);
  }
}
