import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LoginService } from "../service/login.service";
import { User } from "../interfaces/user.interface";
import { async, TestBed } from "@angular/core/testing";
import { AppComponent } from "../app.component";

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;
let de:      DebugElement;

describe( 'LoginService Test Suite', () => {

  let loginService = new LoginService();

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [LoginService],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp    = fixture.componentInstance;
        de    = fixture.debugElement;
      });
  }));

  it( "Login Service was initialized", () => {
    expect( loginService ).toBeTruthy();
  } );

  xit( "Firebase was declared", () => {
    expect( firebase ).toBeUndefined();
  } );

  it( "EventEmitter loginEmitter exists and it's EventEmitter", () => {
    expect( loginService.loginEmitter ).toBeTruthy();
    expect( loginService.loginEmitter.__proto__.hasOwnProperty("emit") ).toBeTruthy();
  } );

  it( "EventEmitter isLoginCorrectEmitter exists and it's EventEmitter", () => {
    expect( loginService.isLoginCorrectEmitter ).toBeTruthy();
    expect( loginService.isLoginCorrectEmitter.__proto__.hasOwnProperty("emit") ).toBeTruthy();
  } );

  it( "EventEmitter isSignOutSuccessful exists and it's EventEmitter", () => {
    expect( loginService.isSignOutSuccessful ).toBeTruthy();
    expect( loginService.isSignOutSuccessful.__proto__.hasOwnProperty("emit") ).toBeTruthy();
  } );

  it( "Function loginState() exists and returns undefined", () => {
    expect( loginService.loginState(true) ).toBeUndefined();
  } );

  it( "Function loginState() contains loginEmitter", () => {
    expect( loginService.loginState ).toMatch("this.loginEmitter.emit");
  } );


  it( "Function onLogin() exists and returns undefined", () => {
    let user: User;
    expect( loginService.onLogin( user ).bind(de) ).toBeUndefined();
  } );


} );
