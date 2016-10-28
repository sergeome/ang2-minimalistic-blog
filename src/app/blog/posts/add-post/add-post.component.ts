import {Component, OnInit, ElementRef, ViewChild, ViewContainerRef} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {TransmitterService} from "../../../service/transmitter.service";
import {Post} from "../../../interfaces/post.interface";
import {Overlay} from "angular2-modal";
import {Modal} from "angular2-modal/plugins/bootstrap/modal";

declare var post: Post;

@Component({
  selector: 'app-add-post',
  templateUrl: 'add-post.component.html',
  styleUrls: ['add-post.component.css']
})

export class AddPostComponent implements OnInit {

  postForm: FormGroup;

  ctaSubmitTitle = "Publish";

  postStatus = "new";

  post: Post = {
    author: "Sergeome",
    content: "",
    imageURL: "",
    title: "",
    tags: [],
    date: ""
  };

  constructor(private transmitterService: TransmitterService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
    this.postForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'content': new FormControl('', Validators.required),
      'tags': new FormControl('')
    });
  }

  @ViewChild('fileInput')
  fileInput: ElementRef;

  onSetPost(){
    switch (this.postStatus) {
      case "new":
        this.onSubmitPost();
        break;
      case "posted":
        this.onEditPost();
        break;
      case "updated":
        this.onEditPost();
        break;
    }
  }

  onNewPost(){
    this.postStatus = "new";
    this.postForm.reset();
    this.post.imageURL = "";
    this.ctaSubmitTitle = "Publish";
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
    if (this.postForm.value.tags) {
      this.post.tags = this.postForm.value.tags.split(" ");
    }
    this.post.date = this.getToday();
    this.transmitterService.sendPost(this.post);
  }

  onEditPost() {
    this.post.title = this.postForm.value.title;
    this.post.content = this.postForm.value.content;
    this.post.tags = this.postForm.value.tags.split(" ");
    this.post.date = this.getToday();
    this.transmitterService.editPost(this.post);
  }

  getToday(){
    var today = new Date;
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    return mm + "." + dd + "." + yyyy;
  }

  isPostPostedSucess(){
    this.modal.alert()
      .size('lg')
      .showClose(false)
      .title('')
      .body(`
            <p>Your post was successfully published!</p>
           `)
      .open();
  }

  ngOnInit() {
    this.transmitterService.isPostPostedEmitter.subscribe(
      (isPosted) => {
        if (isPosted) {
          this.isPostPostedSucess();
          this.postStatus = "posted";
          this.ctaSubmitTitle = "Republish";
        } else {
          this.postStatus = "error during posting";
        }
      }
    );

    this.transmitterService.isPostUpdatedEmitter.subscribe(
      (isUpdated) => {
        if (isUpdated) {
          this.postStatus = "updated";
        } else {
          this.postStatus = "error during update";
        }
      }
    );
  }

}
