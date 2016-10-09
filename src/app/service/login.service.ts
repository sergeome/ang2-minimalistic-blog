import { Injectable, EventEmitter } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { Subject, Observable } from "rxjs";

declare var firebase: any;

@Injectable()

export class LoginService {
  constructor() {}

  isLoginCorrect;
  loginEmitter = new EventEmitter<boolean>();
  isAuthorizedEmitter = new EventEmitter<boolean>();
  isUserAuthorized: any;
  subject = new Subject<boolean>();

  loginState( loginState ) {
    this.loginEmitter.emit( loginState );
  }

  onLogin( user: User ) {
    var self = this;
    firebase.auth().signInWithEmailAndPassword( user.email, user.password )
      .then(function () {
      console.log( "Service - User was signed in" );
        self.isAuthorizedEmitter.emit(true);
    }, function (error) {
        console.log( "Service - User wasn't signed in" );
        console.log( error );
        self.isAuthorizedEmitter.emit(false);
      });
  }

  onSignOut( ) {
    var self = this;
    firebase.auth().signOut().then( function () {
      console.log( "Service - User was sign out" );
      self.subject.next(false);
    }, function ( error ) {
      console.log( error );
      console.log( "Service - There was an error during singing out" );
    } );
  }

  isAuthenticated(): Observable<boolean> {
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.subject.next(true);
      } else {
        self.subject.next(false);
      }
    });
    return this.subject.asObservable();
  }



}
