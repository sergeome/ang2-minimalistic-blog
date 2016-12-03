import { LoginService } from "../service/login.service";
import { FirebaseTestService } from "./firebase.test.service";
import * as firebase from "firebase";
import { Subject, Observable } from "rxjs";

describe( 'LoginService Test Suite', () => {
  let loginService: LoginService;
  let firebaseTestService: FirebaseTestService;
  let testSubject: Subject<boolean>;
  let testObservable: Observable<boolean>;

  beforeAll(() => {
    loginService = new LoginService();
    firebaseTestService = new FirebaseTestService();
    testSubject = new Subject<boolean>();
    testObservable = testSubject.asObservable();
  });

  afterAll(() => {
    firebaseTestService.removeInstance();
    loginService = null;
    firebaseTestService = null;
    testObservable = null;
    testSubject = null;
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

  it( "Function onLogin() exists and returns undefined. Correct credentials test.", () => {
    var incorrectCredentials = {
      email: "test@test.com",
      password: "testtesttest"
    };
    expect(loginService.onLogin(incorrectCredentials)).toBeUndefined();
  } );

  it( "Function onSignOut() exists and returns undefined", () => {
    expect(loginService.onSignOut()).toBeUndefined();
  } );

  it( "Function isAuthenticated() exists and returns Observable", () => {
    expect( loginService.isAuthenticated()).toEqual( testObservable );
  } );

} );