import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidateSessionGuard implements CanActivate {
  private cookie?: string | undefined = '';

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkCookie(); // TODO: true | false
  }

  private checkCookie(): boolean {
    if (this.cookie !== undefined) {
      return true;
    } else {
      // this.router.navigate(['/auth/login']);
      return !this.router.navigate(['/', 'auth', 'login']);
    }
  }
}
