import { Component, OnInit, HostBinding } from "@angular/core";
import { LoginService } from "./service/login.service";
import { FirebaseService } from "./service/firebase.service";

@Component( {
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit {

  constructor( private loginService: LoginService, private firebaseService: FirebaseService) {}

  @HostBinding( 'class.login' ) isLogin = false;
  @HostBinding( 'class.hide' ) bodyIsHidden = true;

  ngOnInit() {
    this.loginService.loginEmitter.subscribe(
      ( isLogin ) => {
        this.isLogin = isLogin;
      }
    );
  }

  //
  ngAfterViewChecked(){
    setTimeout(_ => this.bodyIsHidden = false);
  }
}
