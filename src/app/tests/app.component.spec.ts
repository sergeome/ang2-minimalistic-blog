import { AppComponent } from "../app.component";
import { LoginService } from "../service/login.service";
import { FirebaseTestService } from "./firebase.test.service";

describe( 'AppComponent Test Suite', () => {

  let loginService: LoginService;
  let firebaseTestService: FirebaseTestService;
  let appComponent: AppComponent;

  beforeAll(() => {
    loginService = new LoginService();
    firebaseTestService = new FirebaseTestService();
    appComponent = new AppComponent( loginService, firebaseTestService );
  });

  afterAll(() => {
    firebaseTestService.removeInstance();
    loginService = null;
    firebaseTestService = null;
    appComponent = null;
  } );

  it( "Firebase Test Service was initialized", () => {
    expect( firebaseTestService ).toBeTruthy();
  } );

  it( "Login Service was initialized", () => {
    expect( loginService ).toBeTruthy();
  } );

  it( "App Component was initialized", () => {
    expect( appComponent ).toBeTruthy();
  } );

  it('Observable test using EventEmitter ', done => {
    loginService.loginEmitter.subscribe(x => {
      expect(x).toBe(true);
      done();
    });
    loginService.loginEmitter.emit(true);
  });

  it( "Variable isLogin exist and it's false by default", () => {
    expect( appComponent.isLogin ).toBeFalsy();
  } );

  it( "Variable bodyIsHidden exist and it's true by default", () => {
    expect( appComponent.bodyIsHidden ).toBeTruthy();
  } );

  it( "Function ngOnInit() exists and returns undefined", () => {
    expect( appComponent.ngOnInit() ).toBeUndefined();
  } );

  it( "Function ngOnInit() contains loginEmitter from loginService", () => {
    expect( appComponent.ngOnInit ).toMatch("this.loginService.loginEmitter");
  } );

  it( "Function ngAfterViewChecked() exists and returns undefined", () => {
    expect( appComponent.ngAfterViewChecked() ).toBeUndefined();
  } );

  it( "Function ngAfterViewChecked() contains Variable bodyIsHidden", () => {
    expect( appComponent.ngAfterViewChecked ).toMatch("this.bodyIsHidden")
  } );

  it( "Function ngAfterViewChecked() contains setTimeout", () => {
    expect( appComponent.ngAfterViewChecked ).toMatch("setTimeout")
  } );

} );
