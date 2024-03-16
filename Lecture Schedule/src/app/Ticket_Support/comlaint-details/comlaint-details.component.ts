import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-comlaint-details',
  templateUrl: './comlaint-details.component.html',
  styleUrls: ['./comlaint-details.component.scss']
})
export class ComlaintDetailsComponent implements OnInit {
  complaint: any={};

  
  constructor(private httpserv:HttpService, private authserv:AuthService ,private router:Router) { 
  }
  // id:string
ngOnInit(): void {
  // this.id=window.location.href.split('/')[5];
  // this.httpserv.GET(AdminController.GetComplaintDetails(this?.id)).subscribe(
  //   (response) => {
  //  this.complaint=response;
  //     console.log(JSON.stringify(response)+" replies");
  //   });

}

}
