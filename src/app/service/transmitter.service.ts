import {Injectable, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/Rx";
import * as firebase from "firebase";

@Injectable()
export class TransmitterService{

  constructor(private http: Http) {}

  getPostEmitter = new EventEmitter<any>();

  postKey: any;

  firstKey: any;
  lastKey: any;
  nextKey: any = "";
  amountOfPostsTotal: any;
  amountOfPostsToLoad: any = 0;
  amountOfPostsIsLoaded: any = 0;

  imageURLEmitter = new EventEmitter<string>();
  isPostPostedEmitter = new EventEmitter<boolean>();
  isPostUpdatedEmitter = new EventEmitter<boolean>();

  dataBaseUrl = "https://sergeblog-bee9c.firebaseio.com";

  getAllPostsAtOnce() {
    var query = firebase.database().ref("posts").orderByKey();
    query.once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          // key will be "ada" the first time and "alan" the second time
          var key = childSnapshot.key;
          // childData will be the actual contents of the child
          var childData = childSnapshot.val();
          this.getPostEmitter.emit(childData);
        });
      });
  }

  getPostsOnInit(amountOfPostsToRetrieve){
    //Waiting two promises in order to get first and last keys in database
    Promise.all([this.getFirstKey, this.getLastKey, this.getPostAmount])
      .then( (keys) => {
          this.firstKey = keys[0];
          this.lastKey = keys[1];
          this.amountOfPostsTotal = keys[2];

        var isFirstEnter = true;
        var keepingFlag = false;
        var tempArray = [];
        firebase.database().ref("posts").orderByKey().limitToLast(amountOfPostsToRetrieve + 1).on('child_added', (childSnapshot, prevChildKey) => {
          if ((isFirstEnter && this.firstKey == childSnapshot.key && this.amountOfPostsTotal !== amountOfPostsToRetrieve + 1) || keepingFlag) {
            keepingFlag = true;
            tempArray.push(this.getPreviewExcerpt(childSnapshot.val()));
            this.amountOfPostsIsLoaded++;
            if (tempArray.length == this.amountOfPostsTotal) {
              this.getPostEmitter.emit(tempArray.reverse());
            }
          } else if (isFirstEnter) {
            isFirstEnter = false;
            this.nextKey = childSnapshot.key;
          } else {
            this.amountOfPostsIsLoaded++;
            tempArray.push(this.getPreviewExcerpt(childSnapshot.val()));
            if (tempArray.length == amountOfPostsToRetrieve){
              this.getPostEmitter.emit(tempArray.reverse());
            }
          }
        });

        }
      );
  }

  getPostsOnLoad(amountOfPostsToRetrieve) {
    if(this.nextKey){

      var isFirstEnter = true;
      var tempArray = [];
      var keepingFlag = false;

      this.amountOfPostsToLoad = this.amountOfPostsTotal - this.amountOfPostsIsLoaded;

      firebase.database().ref("posts").orderByKey().endAt(this.nextKey).limitToLast(amountOfPostsToRetrieve + 1).on('child_added', (childSnapshot, prevChildKey) => {
        if ((isFirstEnter && this.firstKey == childSnapshot.key && this.amountOfPostsToLoad !== amountOfPostsToRetrieve + 1) || keepingFlag){
          keepingFlag = true;
          tempArray.push(this.getPreviewExcerpt(childSnapshot.val()));
          if (tempArray.length == this.amountOfPostsToLoad) {
            this.getPostEmitter.emit(tempArray.reverse());
          }
          this.nextKey = "";
        } else if (isFirstEnter) {
          isFirstEnter = false;
          this.nextKey = childSnapshot.key;
        } else {
          this.amountOfPostsIsLoaded++;
          tempArray.push(this.getPreviewExcerpt(childSnapshot.val()));
          if (tempArray.length == amountOfPostsToRetrieve){
            this.getPostEmitter.emit(tempArray.reverse());
          }
        }
      });
    }
  }


  onImageUpload(image, imageName) {
    var postImageDirectory = "Post Images/";
    firebase.storage().ref(postImageDirectory + imageName).put(image).then((snapshot) => {
      firebase.storage().ref().child(postImageDirectory + imageName).getDownloadURL().then((URL) => {
        this.imageURLEmitter.emit(URL);
      });
    });

  }

  sendPost(post: any) {
    this.postKey = firebase.database().ref().child('posts').push(post).key;
    if (this.postKey) {
      this.isPostPostedEmitter.emit(true);
    } else {
      this.isPostPostedEmitter.emit(false);
    }
  }

  editPost(post: any) {
    var updates = {};
    updates['/posts/' + this.postKey] = post;
    firebase.database().ref().update(updates).then(
      _ => {
        this.isPostUpdatedEmitter.emit(true);
      },
      error => {
        this.isPostUpdatedEmitter.emit(false);
      }
    );
  }

  getFirstKey = new Promise((resolve, reject) => {
    firebase.database().ref("posts").orderByKey().limitToFirst(1).on('child_added', (childSnapshot, prevChildKey) => {
      resolve (childSnapshot.key);
    });
  });

  getLastKey = new Promise((resolve, reject) => {
    firebase.database().ref("posts").orderByKey().limitToLast(1).on('child_added', (childSnapshot, prevChildKey) => {
      resolve (childSnapshot.key);
    });
  });

  getPostAmount = new Promise((resolve, reject) => {
    this.amountOfPostsTotal = 0;
    var query = firebase.database().ref("posts").orderByKey();
    query.once("value")
      .then((snapshot) => {
        resolve(Object.keys(snapshot.val()).length);
      });
  });

  getPreviewExcerpt(currentPost){
    currentPost.content = currentPost.content.substring(0, 400) + "...";
    return currentPost;
  }
}
