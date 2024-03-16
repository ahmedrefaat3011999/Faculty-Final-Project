import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
                                                                           
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  ngOnInit(): void {

//localStorage.getItem("them")
   $('body').addClass("bg-theme bg-theme7")
    // const token = JSON.parse(localStorage.getItem('userToken'));
    // this._AuthService.getUserData(token);
  this._AuthService.getUserData(this._AuthService.token);

  console.log(this._AuthService.currentUser?.roles[0]);
    if (this._AuthService.currentUser?.roles[0] == 'Admin') {
      console.log(location.href.split("4200")[1]);
      // window.location.href;
    if (location.href.split("4200")[1]=='/'||location.href.split("4200")[1]=="/auth/sign-in") {
      this._Router.navigate(['/dashboard/default']);
    }
      window.location.href
    
    } else {
      this._Router.navigate(['/']);
    }

    // let refreshIntervalId = setInterval(() => {
    // }, 0);

  }
}
