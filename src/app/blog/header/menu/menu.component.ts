import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { LoginService } from "../../../service/login.service";

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

  isResponsive = false;

  private subscription: Subscription;
  isAuthenticated: any = true;

  constructor(private loginService: LoginService) {
    this.subscription = this.loginService.isAuthenticated().subscribe(
      authState => this.isAuthenticated = authState
    )
  }

  onLogout(){
    this.loginService.onSignOut();
  }

  ngOnInit() {
  }

}
