import { Injectable, EventEmitter } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { Subject, Observable } from "rxjs";

declare var firebase: any;

@Injectable()

export class LoginService {
  constructor() {}

  isLoginSucessful = true;
  loginEmitter = new EventEmitter<boolean>();

  loginState( loginState ) {
    this.loginEmitter.emit( loginState );
  }

  onLogin( user: User ) {
    var self = this;
    firebase.auth().signInWithEmailAndPassword( user.email, user.password )
      .then(function () {
      console.log( "Service - User was signed in" );
    }, function (error) {
        console.log( "Service - User wasn't signed in" );
        console.log( error );
        return self.isLoginSucessful = false;
      //  TODO - on successful login error appears.
      });
  }

  onSignOut( ) {
    firebase.auth().signOut().then( function () {
      console.log( "Service - User was sign out" );
    }, function ( error ) {
      console.log( error );
      console.log( "Service - There was an error during singing out" );
    } );
  }

  isAuthenticated(): Observable<boolean> {
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }



}
