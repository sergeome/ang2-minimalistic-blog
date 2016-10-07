import { Component, OnInit } from '@angular/core';
import { AddBodyClassService } from "../../service/add-body-class.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private addBodyClassService:AddBodyClassService) { }

  ngOnInit() {
    this.addBodyClassService.singlePostState(true);
  }

  ngOnDestroy() {
    this.addBodyClassService.singlePostState(false);
  }

}
