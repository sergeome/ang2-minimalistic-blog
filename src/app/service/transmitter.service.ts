import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";
import * as firebase from "firebase";

@Injectable()
export class TransmitterService {

  postKey: any;
  imageURLEmitter = new EventEmitter<String>();

  dataBaseUrl = "https://sergeblog-bee9c.firebaseio.com";

  constructor( private http: Http ) {}

  //FireBase doesn't work with API anymore.
  //You should use local SDK instead.
  //TODO - rewrite get methods
  getPostById() {
    return this.http.get( this.dataBaseUrl + "/posts.json" )
      .map( ( response: Response ) => response.json() );
  }

  getAllPosts() {
    return this.http.get( this.dataBaseUrl + "/posts.json" )
      .map( ( response: Response ) => response.json() );
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
  }

  editPost( post: any ) {
    var updates = {};
    updates['/posts/' + this.postKey] = post;
    return firebase.database().ref().update(updates);
  }

}
