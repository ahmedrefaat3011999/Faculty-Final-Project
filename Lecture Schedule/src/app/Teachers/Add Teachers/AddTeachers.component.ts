import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-AddTeachers',
  templateUrl: './AddTeachers.component.html',
  styleUrls: ['./AddTeachers.component.scss'],
})
export class AddTeachersComponent implements OnInit {
  

  constructor(private httpserv: HttpService) {}

  ngOnInit(): void {
  }

  
}
