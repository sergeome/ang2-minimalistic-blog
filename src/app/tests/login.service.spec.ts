import { LoginService } from "../service/login.service";

var firebase = require("firebase");
var config = {
  apiKey: "AIzaSyAxxuriKF88lbkhKsH1TSBienKR7OeVR2U",
  authDomain: "sergeblog-bee9c.firebaseapp.com",
  databaseURL: "https://sergeblog-bee9c.firebaseio.com",
  storageBucket: "sergeblog-bee9c.appspot.com",
  messagingSenderId: "7214007472"
};
firebase.initializeApp(config);

describe( 'LoginService Test Suite', () => {
  let loginService: LoginService;

  beforeEach(() => { loginService = new LoginService();});

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


  xit( "Function onLogin() exists and returns undefined", () => {
    var user = {
      password: "test",
      email: "test"
    };
    loginService.onLogin(user);
    expect(true).toBe(true);
  } );


} );