import { Injectable, EventEmitter } from '@angular/core';
import { User } from "../interfaces/user.interface";

declare var firebase: any;

@Injectable()

export class LoginService {
  constructor() {}

  isLoginCorrect = true;
  loginEmitter = new EventEmitter<boolean>();
  isAuthorizedEmitter = new EventEmitter<boolean>();
  isUserAuthorized: any;

  loginState( loginState ) {
    this.loginEmitter.emit( loginState );
  }

  onLogin( user: User ) {
    var self = this;
    firebase.auth().signInWithEmailAndPassword( user.email, user.password )
      .then(function () {
      console.log( "Service - User was signed in" );
        self.isAuthorizedEmitter.emit(true);
        return self.isLoginCorrect = false;
    }, function (error) {
        console.log( "Service - User wasn't signed in" );
        console.log( error );
        self.isAuthorizedEmitter.emit(false);
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

  isAuthenticated() {
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.isAuthorizedEmitter.emit(true);
      } else {
        self.isAuthorizedEmitter.emit(false);
      }
    });
  }



}
