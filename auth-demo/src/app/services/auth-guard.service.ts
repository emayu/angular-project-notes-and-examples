import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(router, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn())
      return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
    return false;
  }

}
