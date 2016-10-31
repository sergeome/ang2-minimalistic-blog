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
    this.getPostOnAdd(); //Subscribe to the asynchronous posts updating
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

  //Navigating to the chosen post by clicking on the "Read More >" link
  setTargetPost(key) {
    for (var i = 0; i < this.allPosts.length; i++) {
      if (this.allPosts[i].key === key) {
        this.targetPost =  this.allPosts[i];
        this.router.navigate(['/singlepost', key]);
      }
    }
  }

  //Receiving post when it was added asynchronously from "transmitterService" and pushing into all-posts component.
  getPostOnAdd(){
    this.transmitterService.addedPostEmitter.subscribe(
      (data) => {
        this.allPosts.unshift(data);
        this.postsEmitter.emit(this.allPosts);
      }
    );
  }





}
