import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-halls',
  templateUrl: './all-halls.component.html',
  styleUrls: ['./all-halls.component.scss']
})
export class AllHallsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  halls:any[] = ["Halls 1", "Halls 2", "Halls 3", "Halls 4", "Halls 5", "Halls 6"]
}
