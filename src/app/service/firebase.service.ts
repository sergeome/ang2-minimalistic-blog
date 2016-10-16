import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class FirebaseService {

  constructor() {
    var config = {
      apiKey: "AIzaSyAxxuriKF88lbkhKsH1TSBienKR7OeVR2U",
      authDomain: "sergeblog-bee9c.firebaseapp.com",
      databaseURL: "https://sergeblog-bee9c.firebaseio.com",
      storageBucket: "sergeblog-bee9c.appspot.com",
      messagingSenderId: "7214007472"
    };
    firebase.initializeApp(config);
  }

}
