import {Component, OnInit} from "@angular/core";
import {PostService} from "../../service/post.service";
import {TransmitterService} from "../../../service/transmitter.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private postService: PostService, private transmitterService: TransmitterService, private activatedRoute: ActivatedRoute) {
    this.postId = this.activatedRoute.snapshot.params['id'];
  }

  post = {};
  postId = "";

  ngOnInit() {
    window.scrollTo(0,0);
    this.post = this.postService.targetPost;
    if (Object.keys(this.post).length === 0) {
      this.transmitterService.targetPostEmitter.subscribe(
        (post) => {
          this.post = post;
        }
      );
      this.transmitterService.getPostByKey(this.postId);
    }
  }
}
