import {Component, OnInit, ElementRef, ViewChild, ViewContainerRef, OnDestroy} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {TransmitterService} from "../../../service/transmitter.service";
import {Post} from "../../../interfaces/post.interface";
import {Overlay} from "angular2-modal";
import {Modal} from "angular2-modal/plugins/bootstrap/modal";
import {Subscription} from "rxjs";

declare var post: Post;

@Component({
  selector: 'app-add-post',
  templateUrl: 'add-post.component.html',
  styleUrls: ['add-post.component.css']
})

export class AddPostComponent implements OnInit, OnDestroy {

  postForm: FormGroup;

  ctaSubmitTitle = "Publish";

  postStatus = "new";

  isLoading = false;

  post: Post = {
    author: "Sergeome",
    content: "",
    imageURL: "",
    title: "",
    tags: [],
    date: ""
  };

  isPostedSubscription: Subscription;
  isUpdatedSubscription: Subscription;
  imageURLSubscription: Subscription;

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
    this.imageURLSubscription = this.transmitterService.imageURLEmitter.subscribe(
      imageURL => {
        this.post.imageURL = imageURL;
      }
    );
  }

  onSubmitPost(){
    this.onWaiting();
    this.post.title = this.postForm.value.title;
    this.post.content = this.postForm.value.content;
    if (this.postForm.value.tags) {
      this.post.tags = this.postForm.value.tags.split(" ");
    }
    this.post.date = this.getToday();
    this.transmitterService.sendPost(this.post);
  }

  onEditPost() {
    this.onWaiting();
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

  isPostPostedSuccess(){
    this.modal.alert()
      .size('lg')
      .showClose(false)
      .title('')
      .body(`
            <p>Your post was successfully published!</p>
           `)
      .open();
  }

  isPostPostedError(){
    this.modal.alert()
      .size('lg')
      .showClose(false)
      .title('')
      .body(`
            <p>There was an error during publishing your post</p>
           `)
      .open();
  }

  isPostUpdatedSuccess(){
    this.modal.alert()
      .size('lg')
      .showClose(false)
      .title('')
      .body(`
            <p>Your post was successfully updated!</p>
           `)
      .open();
  }

  isPostUpdatedError(){
    this.modal.alert()
      .size('lg')
      .showClose(false)
      .title('')
      .body(`
            <p>There was an error during updating!</p>
           `)
      .open();
  }

  onWaiting(){
    this.isLoading = true;
  }

  ngOnInit() {
    this.isPostedSubscription = this.transmitterService.isPostPostedEmitter.subscribe(
      (isPosted) => {
        this.isLoading = false;
        if (isPosted) {
          this.isPostPostedSuccess();
          this.postStatus = "posted";
          this.ctaSubmitTitle = "Republish";
        } else {
          this.postStatus = "error during posting";
          this.isPostPostedError();
        }
      }
    );

    this.isUpdatedSubscription = this.transmitterService.isPostUpdatedEmitter.subscribe(
      (isUpdated) => {
        this.isLoading = false;
        if (isUpdated) {
          this.postStatus = "updated";
          this.isPostUpdatedSuccess();
        } else {
          this.postStatus = "error during update";
          this.isPostUpdatedError();
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.isPostedSubscription) {
      this.isPostedSubscription.unsubscribe();
    }
    if (this.isUpdatedSubscription) {
      this.isUpdatedSubscription.unsubscribe();
    }
    if (this.imageURLSubscription) {
      this.imageURLSubscription.unsubscribe();
    }
  }

}
