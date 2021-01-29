import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('AUTH GUARD');
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['auth', 'sign-in'], {
        queryParams: { returnUrl: state.url },
      });
    } else {
      // this.router.navigate([{ outlets: { sidebar: 'user' } }]);
    }
    // return this.authService.isLoggedIn;
    return true;
  }
}