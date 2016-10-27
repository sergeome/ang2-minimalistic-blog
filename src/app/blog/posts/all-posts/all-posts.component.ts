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
      (data) => {
       this.allPosts = this.getPreviewExcerpt(data);
       this.loader = false;
      }
    );
    this.postService.onGetPost();
  }

  ngOnDestroy(){
    this.postService.status = "isDestroyed";
  }

  //Setting Post Preview by assigning new property 'contentPreview'
  getPreviewExcerpt(arrayOfPosts){
    var resultingArrayOfPosts = [];
    arrayOfPosts.forEach((post) => {
      var currentPost;
      currentPost = post;
      currentPost.contentPreview = currentPost.content.substring(0, 400) + "...";
      resultingArrayOfPosts.push(currentPost);
    });
    return resultingArrayOfPosts;
  }
}
