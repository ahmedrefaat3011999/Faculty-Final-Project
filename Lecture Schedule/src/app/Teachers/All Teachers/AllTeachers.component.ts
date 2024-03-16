import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-AllTeachers',
  templateUrl: './AllTeachers.component.html',
  styleUrls: ['./AllTeachers.component.scss']
})
export class AllTeachersComponent implements OnInit {

  arr?:any[]=[]


  constructor(private httpserv:HttpService,private authserv:AuthService) { }

  ngOnInit(): void {
    
  }





    
    // handleButtonClick(): void {
    //   const button = document.getElementById('myButton') as HTMLButtonElement;
    //   button.disabled = true;
    //   localStorage.setItem('buttonDisabled', 'true');
    // }
}
