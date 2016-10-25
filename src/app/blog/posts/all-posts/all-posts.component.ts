import {Component, OnInit, HostListener} from "@angular/core";
import {TransmitterService} from "../../../service/transmitter.service";
import {Post} from "../../../interfaces/post.interface";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: 'all-posts.component.html',
  styleUrls: ['all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  loader = true;

  allPosts = [];

  post: Post = {
    author: "Sergeome",
    content: "",
    imageURL: "",
    title: "",
    tags: [],
    date: ""
  };

  constructor(private transmitterService: TransmitterService, private postService: PostService) {}

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
      this.postService.onGetPost();
    }
  }

  onNavigate(postKey){
    this.postService.setTargetPost(postKey);
  }

  ngOnInit() {
    this.postService.postsEmitter.subscribe(
      (posts) => {
        this.allPosts = posts;
        this.loader = false;
      }
    );
    this.postService.onGetPost();
  }

  ngOnDestroy(){
    this.postService.status = "isDestroyed";
  }


}
