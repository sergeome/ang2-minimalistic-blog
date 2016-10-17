import { LoginService } from "../service/login.service";
import { FirebaseTestService } from "./firebase.test.service";
import * as firebase from "firebase";

describe( 'LoginService Test Suite', () => {
  let loginService: LoginService;
  let firebaseTestService: FirebaseTestService;

  beforeAll(() => {
    loginService = new LoginService();
    firebaseTestService = new FirebaseTestService();
  });

  afterAll(() => {
    firebaseTestService.removeInstance();
    loginService = null;
    firebaseTestService = null;
  } );

  it( "Login Service was initialized", () => {
    expect( loginService ).toBeTruthy();
  } );

  it( "Firebase was declared", () => {
    expect( firebase ).toBeTruthy();
  } );

  it( "EventEmitter loginEmitter exists and it's EventEmitter", () => {
    expect( loginService.loginEmitter ).toBeTruthy();
    expect( loginService.loginEmitter.emit( true ) ).toBeUndefined();
  } );

  it( "EventEmitter isLoginCorrectEmitter exists and it's EventEmitter", () => {
    expect( loginService.isLoginCorrectEmitter ).toBeTruthy();
    expect( loginService.isLoginCorrectEmitter.emit( true ) ).toBeUndefined();
  } );

  it( "EventEmitter isSignOutSuccessful exists and it's EventEmitter", () => {
    expect( loginService.isSignOutSuccessful ).toBeTruthy();
    expect( loginService.isSignOutSuccessful.emit( true ) ).toBeUndefined();
  } );

  it( "Function loginState() exists and returns undefined", () => {
    expect( loginService.loginState(true) ).toBeUndefined();
  } );

  it( "Function loginState() contains loginEmitter", () => {
    expect( loginService.loginState ).toMatch("this.loginEmitter.emit");
  } );


  it( "Function onLogin() exists and returns undefined", () => {
    var user = {
      password: "test",
      email: "test"
    };
    expect(loginService.onLogin(user)).toBeUndefined();
  } );


} );