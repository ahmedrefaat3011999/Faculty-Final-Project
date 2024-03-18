import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  arr?: any = {};

  constructor(private httpserv: HttpService, private authserv: AuthService) {}

  ngOnInit(): void {
    // this.getAdminData()
  }

//   getAdminData() {
//     this.httpserv.GET(`Admin`).subscribe((res) => {
//       this.arr=res;
//       this.arr = {
//         role: 1,
//         name: 'string',
//         email: 'string',
//         password: 'string',
//       };
// console.log('this is res data '+this.arr);
// console.log('this is res data '+res);
//     });
//   }
}
