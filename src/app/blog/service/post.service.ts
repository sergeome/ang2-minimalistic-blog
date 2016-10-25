import {Injectable, EventEmitter} from "@angular/core";
import {TransmitterService} from "../../service/transmitter.service";

@Injectable()
export class PostService{

  constructor(private transmitterService: TransmitterService) {
    this.transmitterService.getPostEmitter.subscribe(
      (posts) => {
        this.allPosts = this.allPosts.concat(posts);
        this.postsEmitter.emit(this.allPosts);
      }
    )
  }

  postsEmitter = new EventEmitter<any>();

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



}
