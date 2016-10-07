import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomePageComponent } from "./blog/homepage/homepage.component";
import { BLOG_ROUTES } from "./blog/blog.routing";
import { NotFoundComponent } from "./blog/not-found/not-found.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent, children: BLOG_ROUTES},
  { path: 'login', component: LoginComponent },
  { path: '**',  component: NotFoundComponent },
];

export const routing = RouterModule.forRoot( APP_ROUTES );