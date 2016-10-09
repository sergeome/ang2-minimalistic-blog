import { Injectable, EventEmitter } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { Subject, Observable } from "rxjs";

declare var firebase: any;

@Injectable()

export class LoginService {
  constructor() {}

  loginEmitter = new EventEmitter<boolean>();

  loginState( loginState ) {
    this.loginEmitter.emit( loginState );
  }

  onLogin( user: User ) {
    firebase.auth().signInWithEmailAndPassword( user.email, user.password )
      .then(function () {
      console.log( "Service - User was signed in" );
    }, function (error) {
        console.log( "Service - User wasn't signed in" );
        console.log( error );
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
        this.subject.next(true);
      } else {
        this.subject.next(false);
      }
    });
    return subject.asObservable();
  }



}
