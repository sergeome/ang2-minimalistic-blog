import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../service/login.service";
import {Injectable} from "@angular/core";

@Injectable()
export class NotAuthorizedGuard implements CanActivate {

  private isAuthenticated: boolean;

  isDirectAccess = false;

  constructor(private loginService: LoginService, private router:Router) {
    this.loginService.isAuthenticated().subscribe(
      (authState) => {
        this.isAuthenticated = authState;
        if (this.isDirectAccess && this.isAuthenticated){
        this.isDirectAccess = false;
        this.router.navigate(['/addpost']);
        }
        else if (this.isDirectAccess && !this.isAuthenticated) {
          this.isDirectAccess = false;
          this.router.navigate(['/login'], {queryParams: {'page': 'addpost'}});
        }
      }
    )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | boolean {
    this.isDirectAccess = true;
    if (typeof this.isAuthenticated !== 'undefined') {
      this.isDirectAccess = false;
      if (this.isAuthenticated){
        return Observable.of(true);
      } else {
        return Observable.of(false);
      }
    }
  }
}
