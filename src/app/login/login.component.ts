import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginService } from "../service/login.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

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

  redirectTimer: number = 5000;

  loginForm: FormGroup;
  private subscription: Subscription;

  constructor(private loginService: LoginService, private router:Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'password': new FormControl('', Validators.required)
    });

    //Subscribing for the Authentication state changing
    this.subscription = this.loginService.isAuthenticated().subscribe(
      (authState) => {
        this.isAuthenticated = authState;
        if (authState){
          this.onRedirect();
        }
      }
    )
  }

  onLogin(){
    this.loginService.onLogin(this.loginForm.value);
  }

  onSignOut(){
    this.loginService.onSignOut();
  }

  ngOnInit() {
    //Adding body class when component is loaded
    this.loginService.loginState(true);

    //Subscribing for the Login Errors
    this.loginService.isLoginCorrectEmitter.subscribe(
      isLoginCorrect => this.isLoginCorrect = isLoginCorrect
    );
  }

  onRedirect(){
    var self = this;
    setTimeout(function () {
      self.router.navigate(['/']);
    }, this.redirectTimer);
  }

  ngOnDestroy(){
    //Removing body class when component is unloaded
    this.loginService.loginState(false);
  }

}
