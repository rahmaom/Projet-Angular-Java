import { LoginServiceService } from './services/login-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuardGuard implements CanActivate {
    constructor(private _auth: LoginServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (!this._auth.isAuthenticated()) {
      this.router.navigate(["/login"]);
      return false;

    }
    console.log("raaah true");

    return true;
  }
  
}
