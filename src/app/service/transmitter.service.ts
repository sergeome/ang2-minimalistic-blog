import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/Rx";
import * as firebase from "firebase";

@Injectable()
export class TransmitterService {

  getPostEmitter = new EventEmitter<any>();

  postKey: any;
  imageURLEmitter = new EventEmitter<string>();
  isPostPostedEmitter = new EventEmitter<boolean>();
  isPostUpdatedEmitter = new EventEmitter<boolean>();

  dataBaseUrl = "https://sergeblog-bee9c.firebaseio.com";

  constructor( private http: Http ) {}

  getAllPostsAtOnceFromFirebase(){
    var query = firebase.database().ref("posts").orderByKey();
    query.once("value")
      .then( (snapshot) => {
        snapshot.forEach( (childSnapshot) => {
          // key will be "ada" the first time and "alan" the second time
          var key = childSnapshot.key;
          // childData will be the actual contents of the child
          var childData = childSnapshot.val();
          this.getPostEmitter.emit(childData);
        });
      });
  }

  test(){
    // @data: messages, users, products... the dataset you want to do something with.
    // @_start: min ID where you want to start fetching your data.
    // @_end: max ID where you want to start fetching your data.
    // @_n: Step size. In other words, how much data you want to fetch from Firebase.

    //FIRST VALUE BY KEY
    firebase.database().ref( "posts" ).orderByKey().limitToFirst( 1 ).on( "value", ( snapshot ) => {
      snapshot.forEach( ( childSnapshot ) => {
          console.log( "First" );
          console.log( childSnapshot.key );
          return false;
        }
      )
    } );

    //LAST VALUE BY KEY
    firebase.database().ref( "posts" ).orderByKey().limitToLast( 1 ).on( "value", ( snapshot ) => {
      snapshot.forEach( ( childSnapshot ) => {
          console.log( "Last" );
          console.log( childSnapshot.key );
          return false;
        }
      )
    } );

    // var data = [];
    // var _start = 0;
    // var _end = 2;
    // var _n = 3;
    // var getDataset = function() {
    //   firebase.database().ref("posts").orderByKey().startAt("-KUTgK16Ozj1vDsJH-o8").endAt("-KUTgnLinNGD8MkSVEvq").limitToLast(_n).on("child_added", function(dataSnapshot) {
    //     // data.push(dataSnapshot.val());
    //     console.log( dataSnapshot.val() );
    //     console.log( dataSnapshot );
    //   });
    //   _start = _start + _n;
    //   _end = _end + _n;
    // };
    // getDataset();



  }

  onImageUpload( image, imageName ) {
    var postImageDirectory = "Post Images/";
    firebase.storage().ref( postImageDirectory + imageName ).put( image ).then( ( snapshot ) => {

      firebase.storage().ref().child( postImageDirectory + imageName ).getDownloadURL().then( ( URL ) => {
        this.imageURLEmitter.emit(URL);
      } );
    } );

  }

  sendPost( post: any ) {
    this.postKey = firebase.database().ref().child( 'posts' ).push( post ).key;
    if (this.postKey) {
      this.isPostPostedEmitter.emit(true);
    } else {
      this.isPostPostedEmitter.emit(false);
    }
  }

  editPost( post: any ) {
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

}
