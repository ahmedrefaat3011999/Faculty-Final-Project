import { Component, OnInit } from '@angular/core';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.scss']
})
  export class AllComplaintsComponent  implements OnInit{
    constructor(public httpserv: HttpService){}
   
    ngOnInit(): void {
      
    }


  }
