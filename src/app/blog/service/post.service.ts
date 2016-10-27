import {Injectable, EventEmitter} from "@angular/core";
import {TransmitterService} from "../../service/transmitter.service";
import {Router} from "@angular/router";

@Injectable()
export class PostService{

  constructor(private transmitterService: TransmitterService, private router: Router) {
    this.transmitterService.getPostEmitter.subscribe(
      (posts) => {
        this.allPosts = this.allPosts.concat(posts);
        this.postsEmitter.emit(this.allPosts);
      }
    )
  }

  postsEmitter = new EventEmitter<any>();

  targetPost = {};

  allPosts = [];
  postAmountToLoad = 3;

  status = "firstLoad";

  onGetPost(){
    switch (this.status) {
      case "firstLoad":
        this.getPostsOnInit();
        break;
      case "loaded":
        this.getPostsOnLoad();
        break;
      case "isDestroyed":
        this.getSavedStateFromService();
        break;
    }
  }

  getPostsOnInit(){
    this.getPostOnAdd();
    this.status = "loaded";
    this.transmitterService.getPostsOnInit(this.postAmountToLoad);
  }

  getPostsOnLoad(){
    this.transmitterService.getPostsOnLoad(this.postAmountToLoad);
  }

  getSavedStateFromService(){
    this.status = "loaded";
    this.postsEmitter.emit(this.allPosts);
  }

  setTargetPost(key) {
    for (var i = 0; i < this.allPosts.length; i++) {
      if (this.allPosts[i].key === key) {
        this.targetPost =  this.allPosts[i];
        this.router.navigate(['/singlepost', key]);
      }
    }
  }

  getPostOnAdd(){
    this.transmitterService.addedPostEmitter.subscribe(
      (post) => {
        this.postsEmitter.emit(this.allPosts.unshift(post));
      }
    );
  }





}
