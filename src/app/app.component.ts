import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HostBinding } from "@angular/core/src/metadata/directives";
import { LoginService } from "./service/login.service";

@Component( {
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit, AfterViewInit {

  // isLoading: boolean;

  constructor( private loginService: LoginService ) {
    // this.isLoading = true;
  }

  @HostBinding( 'class.login' ) isLogin = false;

  ngOnInit() {
    this.loginService.loginEmitter.subscribe(
      ( isLogin ) => {
        this.isLogin = isLogin
      }
    );
  }

  isReady(){
    return true;
  }

  ngAfterViewInit(){
    // this.isLoading = false;
    this.isReady();
  }
}
