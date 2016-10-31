import {Component, OnInit, OnDestroy, NgZone} from "@angular/core";
import {LoginService} from "../service/login.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription, Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  //Verifying is login correct for "Error Message" on invalid credentials
  isLoginCorrect: any = true;

  //Verifying is authentication state for View Updating
  isAuthenticated: any = true;

  redirectAfter: number = 3000;
  timerRemains: number = this.redirectAfter;

  loginForm: FormGroup;

  isLoading = false;
  private subscriptionForAuthState: Subscription;
  private subscriptionForQueryParams: Subscription;
  private isLoginCorrectSubscription: Subscription;

  private queryParams: any;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'password': new FormControl('', Validators.required)
    });
  }

  onLogin() {
    this.onWaiting();
    this.loginService.onLogin(this.loginForm.value);
  }

  onWaiting() {
    this.isLoading = true;
  }

  onRedirect() {
    this.getRemainingTime();
    setTimeout(() => {
      if (this.queryParams) {
        this.router.navigate(['/' + this.queryParams]);
      } else {
        this.router.navigate(['/']);
      }
    }, this.timerRemains);
  }

  getRemainingTime() {
    let timer = Observable.timer(1000, 1000);
    timer.subscribe(t => {
      this.timerRemains -= 1000;
    });
    this.timerRemains = this.redirectAfter;
  }

  ngOnInit() {
    //Adding body class when component is loaded
    window.document.body.className = "login";

    //Subscribing for the Authentication state changing
    this.subscriptionForAuthState = this.loginService.isAuthenticated().subscribe(
      (authState) => {
        this.ngZone.run(() => {
        this.isAuthenticated = authState;
        if (authState) {
          this.onRedirect();
        }
        });
      }
    );

    //Subscribing for the Login Errors
    this.isLoginCorrectSubscription = this.loginService.isLoginCorrectEmitter.subscribe(
      isLoginCorrect => {
        this.ngZone.run(() => {
          this.isLoginCorrect = isLoginCorrect;
          this.isLoading = false;
        });
      }
    );

    this.subscriptionForQueryParams = this.route.queryParams.subscribe(
      queryParams => this.queryParams = queryParams['page']
    );

  }

  ngOnDestroy() {
    //Removing body class when component is unloaded
    window.document.body.className = "";

    this.isLoginCorrectSubscription.unsubscribe();
    this.subscriptionForAuthState.unsubscribe();
    this.subscriptionForQueryParams.unsubscribe();
  }

}
