import {Component, OnInit, OnDestroy} from "@angular/core";
import {PostService} from "../../service/post.service";
import {TransmitterService} from "../../../service/transmitter.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit, OnDestroy {

  targetPostEmitterSubscription: Subscription;
  constructor(private postService: PostService, private transmitterService: TransmitterService, private activatedRoute: ActivatedRoute) {
    this.postId = this.activatedRoute.snapshot.params['id'];
  }

  post = {};
  postId = "";
  loader = true;

  ngOnInit() {
    window.scrollTo(0,0);
    this.post = this.postService.targetPost;
    if (Object.keys(this.post).length === 0) {
      this.targetPostEmitterSubscription = this.transmitterService.targetPostEmitter.subscribe(
        (post) => {
          this.post = post;
          this.loader = false;
        }
      );
      this.transmitterService.getPostByKey(this.postId);
    } else {
      this.loader = false;
    }
  }

  ngOnDestroy(){
    this.targetPostEmitterSubscription.unsubscribe();
  }
}
