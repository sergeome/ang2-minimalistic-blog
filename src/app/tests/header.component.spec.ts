/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { routing } from "../app.routing";
import { HomePageComponent } from "../blog/homepage/homepage.component";
import { HeaderComponent } from "../blog/header/header.component";
import { FooterComponent } from "../blog/footer/footer.component";
import { SearchComponent } from "../blog/header/search/search.component";
import { MenuComponent } from "../blog/header/menu/menu.component";
import { LoginComponent } from "../login/login.component";
import { AddPostComponent } from "../blog/posts/add-post/add-post.component";
import { AllPostsComponent } from "../blog/posts/all-posts/all-posts.component";
import { SinglePostComponent } from "../blog/posts/single-post/single-post.component";
import { NotFoundComponent } from "../blog/not-found/not-found.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LoginService } from "../service/login.service";
import { NotAuthorizedGuard } from "../blog/not-authorized.guard";

describe('Header Component Test', () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent,
  //       HeaderComponent,
  //       FooterComponent,
  //       SearchComponent,
  //       MenuComponent,
  //       LoginComponent,
  //       AddPostComponent,
  //       AllPostsComponent,
  //       SinglePostComponent,
  //       HomePageComponent,
  //       NotFoundComponent
  //     ],
  //     imports: [
  //       BrowserModule,
  //       FormsModule,
  //       HttpModule,
  //       ReactiveFormsModule,
  //       routing
  //     ],
  //     providers: [
  //       LoginService,
  //       NotAuthorizedGuard
  //     ]
  //   });
  // });
  //
  // it('Header component should be created', async(() => {
  //   let fixture = TestBed.createComponent(HeaderComponent);
  //   let header = fixture.debugElement.componentInstance;
  //   expect(header).toBeTruthy();
  // }));
  //
  // xit( 'should render title in a h1 tag', async( () => {
  //   let fixture = TestBed.createComponent( HeaderComponent );
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   console.log( compiled );
  //   expect(true).toBe( true );
  // }));


});
