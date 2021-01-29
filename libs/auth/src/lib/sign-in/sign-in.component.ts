import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserQuery } from '../state';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  loading$ = this.userQuery.loading$;
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || null;
    console.log(this.returnUrl.split('/').slice(1, 3));
  }

  async googleSignIn() {
    await this.authService.googleSignin();
    this.router.navigate([
      { outlets: { primary: this.navigateTo(), sidebar: ['user'] } },
    ]);
  }

  navigateTo() {
    const a = this.returnUrl.split('/');
    return a.slice(1, a.length);
  }
}
