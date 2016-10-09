import { Component, OnInit } from '@angular/core';
import { LoginService } from "../service/login.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginCorrect: any = true;
  isAuthenticated: any = false;
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router:Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'password': new FormControl('', Validators.required)
    });
  }

  onLogin(){
    this.isLoginCorrect = this.loginService.onLogin(this.loginForm.value)
  }

  onSignOut(){
    this.loginService.onSignOut();
  }

  ngOnInit() {
    this.loginService.loginState(true);
    this.loginService.isAuthorizedEmitter.subscribe(
      (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      }
    )
  }

  onRedirect(){
    this.router.navigate(['/']);
  }

  ngOnDestroy(){
    this.loginService.loginState(false);
  }

}
