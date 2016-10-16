import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HostBinding } from "@angular/core/src/metadata/directives";
import { LoginService } from "./service/login.service";
import { FirebaseService } from "./service/firebase.service";

@Component( {
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit, AfterViewInit {

  constructor( private loginService: LoginService, private firebaseService: FirebaseService) {}

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
    this.isReady();
  }
}
