import {Component, OnInit, HostListener} from "@angular/core";
import {TransmitterService} from "../../../service/transmitter.service";
import {Post} from "../../../interfaces/post.interface";

@Component({
  selector: 'app-all-posts',
  templateUrl: 'all-posts.component.html',
  styleUrls: ['all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  allPosts = [];

  loader = true;

  postAmountToLoad = 3;

  post: Post = {
    author: "Sergeome",
    content: "",
    imageURL: "",
    title: "",
    tags: [],
    date: ""
  };

  constructor(private transmitterService: TransmitterService) {}

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
      this.transmitterService.getPostsOnLoad(this.postAmountToLoad);
    }
  }

  ngOnInit() {
    this.transmitterService.getPostsOnInit(this.postAmountToLoad);
    this.transmitterService.getPostEmitter.subscribe(
      (posts) => {
        this.allPosts = this.allPosts.concat(posts);
        this.loader = false;
      }
    )
  }


}
