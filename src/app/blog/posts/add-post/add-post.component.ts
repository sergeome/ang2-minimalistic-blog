import { Component, OnInit, EventEmitter, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TransmitterService } from "../../../service/transmitter.service";
import { Post } from "../../../interfaces/post.interface";
import * as firebase from "firebase";

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
    imageRef: ""
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

  @ViewChild('fileInput')
  fileInput: ElementRef;

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

  onImageUpload(){
    var image = this.fileInput.nativeElement.files[0];
    var imageName = this.fileInput.nativeElement.files[0].name;
    firebase.storage().ref(imageName).put(image).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
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
