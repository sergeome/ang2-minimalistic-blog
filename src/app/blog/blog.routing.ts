import { Routes } from "@angular/router";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { SinglePostComponent } from "./posts/single-post/single-post.component";
import { AllPostsComponent } from "./posts/all-posts/all-posts.component";

export const BLOG_ROUTES: Routes = [
  { path: '', component: AllPostsComponent },
  { path: 'addpost', component: AddPostComponent },
  { path: 'singlepost', component: SinglePostComponent }
];
