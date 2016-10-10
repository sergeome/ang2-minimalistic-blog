import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginService } from "../../../service/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

  isResponsive = false;
  isSignOutSuccessful: boolean;

  private subscription: Subscription;
  isAuthenticated: any = true;

  constructor(private loginService: LoginService, private router:Router) {
    this.subscription = this.loginService.isAuthenticated().subscribe(
      authState => this.isAuthenticated = authState
    )
  }

  onLogout(){
    this.loginService.onSignOut();
    if(this.isSignOutSuccessful){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.isSignOutSuccessful = this.loginService.isSignOutSuccessful.subscribe(
      signOutState => this.isSignOutSuccessful = signOutState
    )
  }

}
