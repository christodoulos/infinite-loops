import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'libs/auth/src/lib/auth.service';

@Component({
  selector: 'infinite-loops-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarUserComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
