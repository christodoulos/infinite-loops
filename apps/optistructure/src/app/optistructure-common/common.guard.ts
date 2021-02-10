import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '@infinite-loops/auth';

@Injectable({
  providedIn: 'root',
})
export class CommonGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['user', 'profile']);
    }
    return true;
  }
}
