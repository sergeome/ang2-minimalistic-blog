import {Component} from "@angular/core";
import {LoginService} from "./service/login.service";
import {FirebaseService} from "./service/firebase-dev.service";
import {TransmitterService} from "./service/transmitter.service";
import {PostService} from "./blog/service/post.service";

@Component( {
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent {

  constructor( private firebaseService: FirebaseService, private loginService: LoginService, private transmitterService: TransmitterService, private postService: PostService) {}

}
