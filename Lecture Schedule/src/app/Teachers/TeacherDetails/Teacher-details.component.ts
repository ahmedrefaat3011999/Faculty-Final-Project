import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Teacher-details',
  templateUrl: './Teacher-details.component.html',
  styleUrls: ['./Teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {

  
    constructor(private httpserv:HttpService,private _activatedRoute: ActivatedRoute,private htt:HttpClient) { }
  
    ngOnInit(): void {
    }

}
