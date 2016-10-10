import { Injectable, EventEmitter } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { Subject, Observable } from "rxjs";

declare var firebase: any;

@Injectable()

export class LoginService {
  constructor() {}

  isLoginSucessful = true;
  loginEmitter = new EventEmitter<boolean>();
  isLoginCorrectEmitter = new EventEmitter<boolean>();
  isSignOutSuccessful = new EventEmitter<boolean>();

  loginState( loginState ) {
    this.loginEmitter.emit( loginState );
  }

  onLogin( user: User ) {
    var self = this;
    firebase.auth().signInWithEmailAndPassword( user.email, user.password )
      .then(function () {
      console.log( "Service - User was signed in" );
        self.isLoginCorrectEmitter.emit(true);
    }, function (error) {
        console.log( "Service - User wasn't signed in" );
        console.log( error );
        self.isLoginCorrectEmitter.emit(false);
      });
  }

  onSignOut( ) {
    var self = this;
    firebase.auth().signOut().then( function () {
      console.log( "Service - User was sign out" );
      self.isSignOutSuccessful.emit(true);
    }, function ( error ) {
      console.log( error );
      console.log( "Service - There was an error during singing out" );
      self.isSignOutSuccessful.emit(false);
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
