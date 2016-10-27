import {Component, OnInit, HostListener, OnDestroy} from "@angular/core";
import {TransmitterService} from "../../../service/transmitter.service";
import {Post} from "../../../interfaces/post.interface";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: 'all-posts.component.html',
  styleUrls: ['all-posts.component.css']
})
export class AllPostsComponent implements OnInit, OnDestroy {

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
        posts.forEach((post) => {
          var tempPost = this.getPreviewExcerpt(post);
          this.allPosts.push(tempPost);
          if (this.allPosts.length == posts.length) {
            this.loader = false;
          }
        });
      }
    );
    this.postService.onGetPost();
  }

  ngOnDestroy(){
    this.postService.status = "isDestroyed";
  }

  //Setting Post Preview by assigning new property 'contentPreview'
  getPreviewExcerpt(currentPost){
    currentPost.contentPreview = currentPost.content.substring(0, 400) + "...";
    return currentPost;
  }


}
