import { Component, OnInit } from '@angular/core';
import { HostBinding } from "@angular/core/src/metadata/directives";
import { LoginService } from "./service/login.service";
import { AddBodyClassService } from "./blog/service/add-body-class.service";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService: LoginService, private addBodyClassService:AddBodyClassService){}
  @HostBinding('class.login') isLogin = false;
  @HostBinding('class.all-posts') isAllPosts = false;
  @HostBinding('class.single-post') isSinglePost = false;

  ngOnInit(){
    this.loginService.loginEmitter.subscribe(
      (isLogin) => {this.isLogin = isLogin}
    );

    this.addBodyClassService.allPostsEmitter.subscribe(
      (isAllPosts) => {this.isAllPosts = isAllPosts}
    );

    this.addBodyClassService.singlePostEmitter.subscribe(
      (isSinglePost) => {this.isSinglePost = isSinglePost}
    );
  }
}
