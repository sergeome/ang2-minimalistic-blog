// import { LoginService } from "../service/login.service";
// import { FirebaseTestService } from "./firebase.test.service";
// import { MenuComponent } from "../blog/header/menu/menu.component";
// import { TestBed, ComponentFixture, inject } from "@angular/core/testing";
// import { routing } from "../app.routing";
// import { Router } from "@angular/router";
//
// describe( 'MenuComponent Test Suite', () => {
//   let loginService: LoginService;
//   let firebaseTestService: FirebaseTestService;
//   let menuComponentFixture: ComponentFixture<MenuComponent>;
//   let menuComponentInstance: any;
//
//   beforeAll(() => {
//     loginService = new LoginService();
//     firebaseTestService = new FirebaseTestService();
//   });
//
//   afterAll(() => {
//     firebaseTestService.removeInstance();
//     loginService = null;
//     firebaseTestService = null;
//   } );
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ MenuComponent, HomePageComponent, AllPostsComponent, AddPostComponent, SinglePostComponent, LoginComponent, NotFoundComponent ],
//       imports: [ routing ],
//       providers: [ LoginService, {provide: APP_BASE_HREF, useValue : '/' } ],
//       schemas: [NO_ERRORS_SCHEMA]
//     })
//       .compileComponents()
//       .then(() => {
//         menuComponentFixture = TestBed.createComponent(MenuComponent);
//         menuComponentInstance = menuComponentFixture.componentInstance;
//         console.log( "hahaha" );
//       });
//   });
//
//   it( "Login Service was initialized", () => {
//     expect( loginService ).toBeTruthy();
//   } );
//
//   it( "Menu Component was initialized", () => {
//     inject( [Router], ( router: Router ) => {
//       console.log( menuComponentFixture );
//       console.log( menuComponentInstance );
//       expect( true ).toBeTruthy();
//     } )
//   } );
//
// } );