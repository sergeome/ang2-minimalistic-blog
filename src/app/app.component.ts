import {Component, OnInit, HostBinding, AfterViewChecked} from "@angular/core";
import {LoginService} from "./service/login.service";
import {FirebaseService} from "./service/firebase.service";
import {TransmitterService} from "./service/transmitter.service";
import {PostService} from "./blog/service/post.service";

@Component( {
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit, AfterViewChecked {

  constructor( private firebaseService: FirebaseService, private loginService: LoginService, private transmitterService: TransmitterService, private postService: PostService) {}

  @HostBinding( 'class.login' ) isLogin = false;
  @HostBinding( 'class.hide' ) bodyIsHidden = true;

  ngOnInit() {
    this.loginService.loginEmitter.subscribe(
      ( isLogin ) => {
        this.isLogin = isLogin;
      }
    );
  }

  ngAfterViewChecked(){
    setTimeout(_ => this.bodyIsHidden = false);
  }
}
