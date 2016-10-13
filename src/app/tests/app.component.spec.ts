import { AppComponent } from "../app.component";
import { LoginService } from "../service/login.service";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "../app.routing";
import { HomePageComponent } from "../blog/homepage/homepage.component";
import { HeaderComponent } from "../blog/header/header.component";
import { FooterComponent } from "../blog/footer/footer.component";
import { SearchComponent } from "../blog/header/search/search.component";
import { MenuComponent } from "../blog/header/menu/menu.component";
import { AllPostsComponent } from "../blog/posts/all-posts/all-posts.component";
import { AddPostComponent } from "../blog/posts/add-post/add-post.component";
import { SinglePostComponent } from "../blog/posts/single-post/single-post.component";
import { LoginComponent } from "../login/login.component";
import { NotFoundComponent } from "../blog/not-found/not-found.component";

describe( 'AppComponent Test Suite', () => {

  let loginService = new LoginService();
  let appComponent = new AppComponent( loginService );

  let comp:    BannerComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach( async(() => {
      TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        MenuComponent,
        SearchComponent,
        FooterComponent,
        AllPostsComponent,
        AddPostComponent,
        SinglePostComponent,
        LoginComponent,
        NotFoundComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        routing
      ],
      providers: [
        LoginService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;
  });


  it( "Login Service was initialized", () => {
    expect( loginService ).toBeTruthy();
  } );

  it( "App Component was initialized", () => {
    expect( appComponent ).toBeTruthy();
  } );

  it( "Variable isLogin exist and it's false by default", () => {
    expect( appComponent.isLogin ).toBeFalsy();
  } );

  it( "Function isReady() is exist and always return true", () => {
    expect( appComponent.isReady() ).toBeTruthy();
  } );

  it( "Function ngOnInit() is exist", () => {
    expect( appComponent.ngOnInit ).toBeTruthy();
  } );

  it( "Function ngOnInit() contains loginEmitter from loginService", () => {
    expect( appComponent.ngOnInit ).toMatch("this.loginService.loginEmitter");
  } );

  it( "Function AfterViewInit() is exist", () => {
    expect( appComponent.ngAfterViewInit ).toBeTruthy();
  } );

  it( "Function AfterViewInit() contains function isReady()", () => {
    expect( appComponent.ngAfterViewInit ).toMatch("this.isReady()");
  } );

} );
