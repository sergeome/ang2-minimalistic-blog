//System Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Main Component
import { AppComponent } from './app.component';

//Blog Components
import { HeaderComponent } from './blog/header/header.component';
import { FooterComponent } from './blog/footer/footer.component';
import { SearchComponent } from './blog/header/search/search.component';
import { MenuComponent } from './blog/header/menu/menu.component';
import { AddPostComponent } from './blog/posts/add-post/add-post.component';
import { AllPostsComponent } from './blog/posts/all-posts/all-posts.component';

//Login Component
import { LoginComponent } from './login/login.component';
import { routing } from "./app.routing";
import { LoginService } from "./service/login.service";
import { SinglePostComponent } from './blog/posts/single-post/single-post.component';
import { HomePageComponent } from './blog/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MenuComponent,
    LoginComponent,
    AddPostComponent,
    AllPostsComponent,
    SinglePostComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
