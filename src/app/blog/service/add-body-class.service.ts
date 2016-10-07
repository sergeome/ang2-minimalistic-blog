import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AddBodyClassService {

  allPostsEmitter = new EventEmitter<boolean>();
  singlePostEmitter = new EventEmitter<boolean>();

  allPostsPageState(state){
    this.allPostsEmitter.emit(state);
  }
  singlePostState(state){
    this.singlePostEmitter.emit(state);
  }

  constructor() { }

}
