import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { LoginService } from "../service/login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class NotAuthorizedGuard implements CanActivate {

  private isAuthenticated: boolean = false;
  private subscriptionForAuthState: Subscription;

  constructor( private loginService: LoginService ) {
    this.subscriptionForAuthState = this.loginService.isAuthenticated().subscribe(
      (authState) => {
        this.isAuthenticated = authState;
      }
    )
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | boolean {
    return this.isAuthenticated;
  }
}