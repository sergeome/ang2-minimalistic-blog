import { Component, OnInit, HostListener } from "@angular/core";
import { TransmitterService } from "../../../service/transmitter.service";
import { Post } from "../../../interfaces/post.interface";

@Component({
  selector: 'app-all-posts',
  templateUrl: 'all-posts.component.html',
  styleUrls: ['all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  allPosts = [];
  loader = true;
  post: Post = {
    author: "Sergeome",
    content: "",
    imageURL: "",
    title: "",
    tags: [],
    date: ""
  };

  constructor(private transmitterService: TransmitterService) { }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
      this.transmitterService.getPosts(2);
    }
  }

  ngOnInit() {
    this.transmitterService.getPosts(2);
    this.transmitterService.getPostEmitter.subscribe(
      (post) => {
        var currentPost = post;
        currentPost.content = currentPost.content.substring(0, 400);
        currentPost.content = currentPost.content + "...";

        this.allPosts.unshift(currentPost);
        if (this.allPosts.length == 2){
          setTimeout( _ => {
            this.loader = false;
          }, 800)
        }
      }
    )
  }


}
