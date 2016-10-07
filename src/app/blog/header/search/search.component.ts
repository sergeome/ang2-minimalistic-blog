import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  placeholderValue = "";

  enablePlaceholder(){
    this.placeholderValue = "search on blog...";
  }

  disablePlaceholder(){
    this.placeholderValue = "";
  }


  constructor() { }

  ngOnInit() {
  }

}
