import { Component, OnInit } from '@angular/core';
import { AddBodyClassService } from "../../service/add-body-class.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: 'all-posts.component.html',
  styleUrls: ['all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private addBodyClassService:AddBodyClassService) { }

  ngOnInit() {
    this.addBodyClassService.allPostsPageState(true);
  }

  ngOnDestroy() {
    this.addBodyClassService.allPostsPageState(false);
  }

}
