import { Component, OnInit } from '@angular/core';
import { HostBinding } from "@angular/core/src/metadata/directives";
import { LoginService } from "./service/login.service";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService: LoginService){}
  @HostBinding('class.login') isLogin = false;

  ngOnInit(){
    this.loginService.loginEmitter.subscribe(
      (isLogin) => {this.isLogin = isLogin}
    );
  }
}
