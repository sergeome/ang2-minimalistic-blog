import {Component, OnInit, OnDestroy, NgZone} from "@angular/core";
import {Subscription} from "rxjs";
import {LoginService} from "../../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  isResponsive = false;

  private subscription: Subscription;
  private isSignOutSubscription: Subscription;
  isAuthenticated: any;

  constructor(private loginService: LoginService, private router:Router, private ngZone: NgZone) {}

  onLogout(){
    this.loginService.onSignOut();
  }

  ngOnInit() {
    this.subscription = this.loginService.isAuthenticated().subscribe(
      authState => {
        this.ngZone.run(() => {
          this.isAuthenticated = authState;
        })
      }
    );

    this.isSignOutSubscription = this.loginService.isSignOutSuccessful.subscribe(
      signOutState => {
        this.ngZone.run(() => {
          if (signOutState) {
            this.router.navigate(['/']);
          }
        })
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.isSignOutSubscription.unsubscribe();
  }

}
