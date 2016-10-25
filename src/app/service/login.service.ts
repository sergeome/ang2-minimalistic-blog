import {Injectable, EventEmitter} from "@angular/core";
import {User} from "../interfaces/user.interface";
import {Subject, Observable} from "rxjs";
import * as firebase from "firebase";

@Injectable()

export class LoginService {

  constructor() {}

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
        self.isLoginCorrectEmitter.emit(true);
        return
    }, function (error) {
        console.log( error );
        self.isLoginCorrectEmitter.emit(false);
      });
  }

  onSignOut( ) {
    var self = this;
    firebase.auth().signOut().then( function () {
      self.isSignOutSuccessful.emit(true);
    }, function ( error ) {
      console.log( error );
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
