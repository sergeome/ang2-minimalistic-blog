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

  isLoginCorrect: any = true;
  isAuthenticated: any = true;
  loginForm: FormGroup;
  private subscription: Subscription;

  constructor(private loginService: LoginService, private router:Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'password': new FormControl('', Validators.required)
    });

    this.subscription = this.loginService.isAuthenticated().subscribe(
      authState => this.isAuthenticated = authState
    )
  }

  onLogin(){
    this.loginService.onLogin(this.loginForm.value);
  }

  onSignOut(){
    this.loginService.onSignOut();
  }

  ngOnInit() {
    this.loginService.loginState(true);
    this.loginService.isLoginCorrectEmitter.subscribe(
      isLoginCorrect => this.isLoginCorrect = isLoginCorrect
    );
  }

  onRedirect(){
    this.router.navigate(['/']);
  }

  ngOnDestroy(){
    this.loginService.loginState(false);
  }

}
