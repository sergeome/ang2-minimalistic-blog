import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./blog/header/header.component";
import {FooterComponent} from "./blog/footer/footer.component";
import {SearchComponent} from "./blog/header/search/search.component";
import {MenuComponent} from "./blog/header/menu/menu.component";
import {AddPostComponent} from "./blog/posts/add-post/add-post.component";
import {AllPostsComponent} from "./blog/posts/all-posts/all-posts.component";
import {LoginComponent} from "./login/login.component";
import {routing} from "./app.routing";
import {LoginService} from "./service/login.service";
import {SinglePostComponent} from "./blog/posts/single-post/single-post.component";
import {HomePageComponent} from "./blog/homepage/homepage.component";
import {NotFoundComponent} from "./blog/not-found/not-found.component";
import {NotAuthorizedGuard} from "./blog/not-authorized.guard";
import {TransmitterService} from "./service/transmitter.service";
import {FirebaseService} from "./service/firebase.service";
import {PostService} from "./blog/service/post.service";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    LoginService,
    TransmitterService,
    FirebaseService,
    PostService,
    NotAuthorizedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){}

}
