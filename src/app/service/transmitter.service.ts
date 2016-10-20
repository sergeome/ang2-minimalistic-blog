import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/Rx";
import * as firebase from "firebase";

@Injectable()
export class TransmitterService {

  getPostEmitter = new EventEmitter<any>();

  postKey: any;

  firstKey: any;
  lastKey: any;

  imageURLEmitter = new EventEmitter<string>();
  isPostPostedEmitter = new EventEmitter<boolean>();
  isPostUpdatedEmitter = new EventEmitter<boolean>();

  dataBaseUrl = "https://sergeblog-bee9c.firebaseio.com";

  constructor( private http: Http ) {}

  getAllPostsAtOnce(){
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

  getFirstPostKey = new Promise( ( resolve, reject ) => {
    firebase.database().ref( "posts" ).orderByKey().limitToFirst( 3 ).on( "value", ( snapshot ) => {
      snapshot.forEach( ( childSnapshot ) => {
          if ( childSnapshot ) {
            console.log( childSnapshot.key );
            resolve( childSnapshot.key );
          } else {
            reject( "Error" );
          }
          return false;
        }
      )
    } );
  } );

  getLastPostKey = new Promise( ( resolve, reject ) => {
    firebase.database().ref( "posts" ).orderByKey().limitToLast( 1 ).on( "value", ( snapshot ) => {
      snapshot.forEach( ( childSnapshot ) => {
          if ( childSnapshot ) {
            resolve( childSnapshot.key );
          } else {
            reject( "Error" );
          }
          return false;
        }
      )
    } );
  } );


  getPosts( amountOfPostsToRetrieve ) {
    Promise.all( [this.getFirstPostKey, this.getLastPostKey] ).then( ( values ) => {
      firebase.database().ref( "posts" ).orderByKey().startAt( values[0].toString() ).endAt( values[1].toString() ).limitToLast( amountOfPostsToRetrieve ).on( "child_added", ( dataSnapshot ) => {
        this.getPostEmitter.emit( dataSnapshot.val() );
        return false;
      } );
    } )
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
