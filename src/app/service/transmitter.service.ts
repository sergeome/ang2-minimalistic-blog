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

  targetPostEmitter = new EventEmitter<any>();
  addedPostEmitter = new EventEmitter<any>();

  subscribedToAsync = false;

  //Get target post when user was navigating via direct url
  getPostByKey(key){
    firebase.database().ref("posts").child(key).once('value').then( (snapshot) => {
      this.targetPostEmitter.emit(snapshot.val());
    });
  }

  //Asynchronously receive post when it was added
  getPostAsync(){
    var ref = firebase.database().ref("posts");
    ref.orderByKey().limitToLast(1).on('child_added', (childSnapshot, prevChildKey) => {
      this.addedPostEmitter.emit(childSnapshot.val());
    });
  }

  //Getting initial amount of posts when application was loaded
  getPostsOnInit(amountOfPostsToRetrieve){
    //Waiting three promises in order to get first, last keys and amount of posts in database
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
            var tempPost = childSnapshot.val();
            tempPost.key = childSnapshot.key;
            tempArray.push(tempPost);
            this.amountOfPostsIsLoaded++;
            if (tempArray.length == this.amountOfPostsTotal) {
              this.getPostEmitter.emit(tempArray.reverse());
            }
          } else if (isFirstEnter) {
            isFirstEnter = false;
            this.nextKey = childSnapshot.key;
          } else {
            this.amountOfPostsIsLoaded++;
            var tempPost = childSnapshot.val();
            tempPost.key = childSnapshot.key;
            tempArray.push(tempPost);
            if (tempArray.length == amountOfPostsToRetrieve){
              this.getPostEmitter.emit(tempArray.reverse());
            }
          }
        });

        }
      );
  }

  //Getting rest amount of posts when application when infinity scroll was performed
  getPostsOnLoad(amountOfPostsToRetrieve) {
    if(this.nextKey){

      var isFirstEnter = true;
      var tempArray = [];
      var keepingFlag = false;

      this.amountOfPostsToLoad = this.amountOfPostsTotal - this.amountOfPostsIsLoaded;

      firebase.database().ref("posts").orderByKey().endAt(this.nextKey).limitToLast(amountOfPostsToRetrieve + 1).on('child_added', (childSnapshot, prevChildKey) => {
        if ((isFirstEnter && this.firstKey == childSnapshot.key && this.amountOfPostsToLoad !== amountOfPostsToRetrieve + 1) || keepingFlag){
          keepingFlag = true;
          var tempPost = childSnapshot.val();
          tempPost.key = childSnapshot.key;
          tempArray.push(tempPost);
          if (tempArray.length == this.amountOfPostsToLoad) {
            this.getPostEmitter.emit(tempArray.reverse());
          }
          this.nextKey = "";
        } else if (isFirstEnter) {
          isFirstEnter = false;
          this.nextKey = childSnapshot.key;
        } else {
          this.amountOfPostsIsLoaded++;
          var tempPost = childSnapshot.val();
          tempPost.key = childSnapshot.key;
          tempArray.push(tempPost);
          if (tempArray.length == amountOfPostsToRetrieve){
            this.getPostEmitter.emit(tempArray.reverse());
          }
        }
      });
    }
  }

  //Get image url when it was uploaded to the Firebase
  onImageUpload(image, imageName) {
    var postImageDirectory = "Post Images/";
    firebase.storage().ref(postImageDirectory + imageName).put(image).then((snapshot) => {
      firebase.storage().ref().child(postImageDirectory + imageName).getDownloadURL().then((URL) => {
        this.imageURLEmitter.emit(URL);
      });
    });

  }

  //Sending post to the firebase
  sendPost(post: any) {
    this.postKey = firebase.database().ref().child('posts').push(post).key;
    if (this.postKey) {
      this.isPostPostedEmitter.emit(true);
      if (!this.subscribedToAsync){
        this.subscribedToAsync = true;
        this.getPostAsync();
      }
    } else {
      this.isPostPostedEmitter.emit(false);
    }
  }

  //Updating post in the firebase
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

  //Promise to the first key in the firebase
  getFirstKey = new Promise((resolve, reject) => {
    firebase.database().ref("posts").orderByKey().limitToFirst(1).on('child_added', (childSnapshot, prevChildKey) => {
      resolve (childSnapshot.key);
    });
  });

  //Promise to the last key in the firebase
  getLastKey = new Promise((resolve, reject) => {
    firebase.database().ref("posts").orderByKey().limitToLast(1).on('child_added', (childSnapshot, prevChildKey) => {
      resolve (childSnapshot.key);
    });
  });

  //Promise to get total amount of posts in the firebase
  getPostAmount = new Promise((resolve, reject) => {
    this.amountOfPostsTotal = 0;
    var query = firebase.database().ref("posts").orderByKey();
    query.once("value")
      .then((snapshot) => {
        resolve(Object.keys(snapshot.val()).length);
      });
  });
}
