import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TransmitterService } from "../../../service/transmitter.service";
import { Post } from "../../../interfaces/post.interface";

declare var post: Post;

@Component({
  selector: 'app-add-post',
  templateUrl: 'add-post.component.html',
  styleUrls: ['add-post.component.css']
})

export class AddPostComponent implements OnInit {

  postForm: FormGroup;

  post: Post = {
    author: "Sergeome",
    content: "",
    id: Math.floor((Math.random() * 100) + 1),
    title: "",
  };

  isSubmitted = false;
  isSubmittedEmitter = new EventEmitter<boolean>();
  ctaSubmitTitle = "Publish";

  constructor(private transmitterService: TransmitterService) {
    this.postForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'content': new FormControl('', Validators.required)
    });
  }

  onSetPost(){
    if (!this.isSubmitted) {
      this.onSubmit();
    } else {
      this.onEdit();
    }
  }

  onNewPost(){
    this.isSubmittedEmitter.emit(false);
  }

  onSubmit(){
    this.post.title = this.postForm.value.title;
    this.post.content = this.postForm.value.content;
    this.transmitterService.sendPost(this.post);
    this.isSubmittedEmitter.emit(true);
  }

  onEdit() {
    this.post.title = this.postForm.value.title;
    this.post.content = this.postForm.value.content;
    this.transmitterService.editPost(this.post);
  }

  ngOnInit() {
    this.isSubmittedEmitter.subscribe(
      (status) => {
        if (!status) {
          this.ctaSubmitTitle = "Publish";
          this.postForm.reset();
          this.isSubmitted = false;
        } else {
          this.isSubmitted = status;
          this.ctaSubmitTitle = "Republish";
        }
      }
    )
  }

}
