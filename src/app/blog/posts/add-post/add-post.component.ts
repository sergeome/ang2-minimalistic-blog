import { Component, OnInit, EventEmitter, ElementRef, ViewChild } from "@angular/core";
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

  isSubmitted = false;
  isSubmittedEmitter = new EventEmitter<boolean>();
  ctaSubmitTitle = "Publish";

  post: Post = {
    author: "Sergeome",
    content: "",
    imageURL: "",
    title: "",
    tags: "",
    date: ""
  };

  constructor(private transmitterService: TransmitterService) {
    this.postForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'content': new FormControl('', Validators.required),
      'tags': new FormControl('')
    });
  }

  @ViewChild('fileInput')
  fileInput: ElementRef;

  onSetPost(){
    if (!this.isSubmitted) {
      this.onSubmitPost();
    } else {
      this.onEditPost();
    }
  }

  onNewPost(){
    this.isSubmittedEmitter.emit(false);
  }

  onImageUpload(){
    var image = this.fileInput.nativeElement.files[0];
    var imageName = this.fileInput.nativeElement.files[0].name;
    this.transmitterService.onImageUpload(image, imageName);
    this.transmitterService.imageURLEmitter.subscribe(
      imageURL => {
        this.post.imageURL = imageURL;
      }
    );
  }

  onSubmitPost(){
    this.post.title = this.postForm.value.title;
    this.post.content = this.postForm.value.content;
    this.post.tags = this.postForm.value.tags;
    this.post.date = this.getToday();
    this.transmitterService.sendPost(this.post);
    this.isSubmittedEmitter.emit(true);
  }

  onEditPost() {
    this.post.title = this.postForm.value.title;
    this.post.content = this.postForm.value.content;
    this.post.tags = this.postForm.value.tags;
    this.post.date = this.getToday();
    this.transmitterService.editPost(this.post);
  }

  getToday(){
    var today = new Date;
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    var todayFormatted = mm + "." + dd + "." + yyyy;

    return todayFormatted;
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
