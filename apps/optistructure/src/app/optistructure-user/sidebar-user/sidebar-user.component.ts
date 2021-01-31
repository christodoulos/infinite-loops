import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@infinite-loops/auth';

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
