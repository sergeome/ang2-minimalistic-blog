import { Routes } from "@angular/router";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { SinglePostComponent } from "./posts/single-post/single-post.component";
import { AllPostsComponent } from "./posts/all-posts/all-posts.component";
import { NotAuthorizedGuard } from "./not-authorized.guard";

export const BLOG_ROUTES: Routes = [
  { path: '', component: AllPostsComponent },
  { path: 'addpost', component: AddPostComponent, canActivate:[NotAuthorizedGuard] },
  { path: 'singlepost', component: SinglePostComponent }
];
