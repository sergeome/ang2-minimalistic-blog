import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';

declare var firebase: any;

@Injectable()
export class TransmitterService {

  database = firebase.database();

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

  sendPost( post: any ) {
    var x;
    console.log( "Sending post for the first time" );
    x = firebase.database().ref().child( 'posts' ).push().set( post );
    console.log( x );
  }

  editPost( post: any ) {
    console.log( "Editing existing post" );
    firebase.database().ref().child( 'posts' ).push().set( post );
  }

}
