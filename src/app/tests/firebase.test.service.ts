import * as firebase from "firebase";

export class FirebaseTestService {

  firebaseApp: any;

  //TODO - Refactor as a secondary APP.
  //Currently it throws an error an require default configuration.
  constructor() {
    var config = {
      apiKey: "AIzaSyAxxuriKF88lbkhKsH1TSBienKR7OeVR2U",
      authDomain: "sergeblog-bee9c.firebaseapp.com",
      databaseURL: "https://sergeblog-bee9c.firebaseio.com",
      storageBucket: "sergeblog-bee9c.appspot.com",
      messagingSenderId: "7214007472"
    };
    this.firebaseApp = firebase.initializeApp(config);
  }

  removeInstance(){
    this.firebaseApp.delete().then( _ => {
      console.log( "app was deleted" );
    }, (error) => {
      console.log( error );
    } );
  }

}
