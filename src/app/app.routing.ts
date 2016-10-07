import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AllPostsComponent } from "./posts/all-posts/all-posts.component";

const APP_ROUTES: Routes = [
  { path: '', component: AllPostsComponent },
  { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot( APP_ROUTES );