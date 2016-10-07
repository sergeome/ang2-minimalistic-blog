import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomePageComponent } from "./blog/homepage/homepage.component";
import { BLOG_ROUTES } from "./blog/blog.routing";

const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent, children: BLOG_ROUTES},
  { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot( APP_ROUTES );