import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component.ts'
import { FooterComponent } from '../footer/footer.component.ts'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
