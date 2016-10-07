import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class LoginService {
  signinUser(){

  }

  constructor( ) {}

  isLogin = false;
  loginEmitter = new EventEmitter<boolean>();

  loginState( loginState ) {
    this.loginEmitter.emit( loginState );
  }


}
