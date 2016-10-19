import { Component, OnInit } from "@angular/core";
import { TransmitterService } from "../../../service/transmitter.service";
import { Post } from "../../../interfaces/post.interface";

@Component({
  selector: 'app-all-posts',
  templateUrl: 'all-posts.component.html',
  styleUrls: ['all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  allPosts = [];
  post: Post = {
    author: "Sergeome",
    content: "",
    imageURL: "",
    title: "",
    tags: [],
    date: ""
  };

  constructor(private transmitterService: TransmitterService) { }

  ngOnInit() {
    this.transmitterService.getAllPostsAtOnceFromFirebase();
    this.transmitterService.getPostEmitter.subscribe(
      (post) => {
        var currentPost = post;
        currentPost.content = currentPost.content.substring(0, 400);
        currentPost.content = currentPost.content + "...";
        this.allPosts.unshift(currentPost);
      }
    )
  }


}
