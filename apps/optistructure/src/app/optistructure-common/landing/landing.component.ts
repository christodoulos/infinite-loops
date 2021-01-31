import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@infinite-loops/auth';

@Component({
  selector: 'infinite-loops-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['user', 'profile']);
    }
  }
}
