import {Injectable, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/Rx";
import * as firebase from "firebase";

@Injectable()
export class TransmitterService{

  getPostEmitter = new EventEmitter<any>();

  postKey: any;
  firstKey: any;
  lastKey: any;

  imageURLEmitter = new EventEmitter<string>();
  isPostPostedEmitter = new EventEmitter<boolean>();
  isPostUpdatedEmitter = new EventEmitter<boolean>();

  dataBaseUrl = "https://sergeblog-bee9c.firebaseio.com";

  constructor(private http: Http) {}

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
    Promise.all([this.getFirstKey, this.getLastKey])
      .then( (keys) => {
          this.firstKey = keys[0];
          this.lastKey = keys[1];

        var isFirstEnter = true;
        var tempArray = [];
        firebase.database().ref("posts").orderByKey().limitToLast(amountOfPostsToRetrieve + 1).on('child_added', (childSnapshot, prevChildKey) => {
          if (isFirstEnter) {
            //If it's first value just remember the key of it but do nothing
            isFirstEnter = false;
          } else {
            var currentPost = childSnapshot.val();
            //Cutting content for preview for 400 symbols
            currentPost.content = currentPost.content.substring(0, 400) + "...";
            tempArray.push(currentPost);
            if (tempArray.length == amountOfPostsToRetrieve) {
              tempArray.reverse();
              this.getPostEmitter.emit(tempArray);
            }
          }

        });

        }
      );
  }

  getPosts(amountOfPostsToRetrieve) {
      firebase.database().ref("posts").orderByKey().endAt(this.lastKey).limitToLast(amountOfPostsToRetrieve + 1).on('child_added', (childSnapshot, prevChildKey) => {
        this.lastKey = childSnapshot.key;
        this.getPostEmitter.emit(childSnapshot.val());
      });
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
    // post.timestamp = firebase.database.ServerValue.TIMESTAMP;
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
}
