import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add_Reply',
  templateUrl: './add_Reply.component.html',
  styleUrls: ['./add_Reply.component.scss'],
})
export class add_ReplyComponent implements OnInit {
  complaintForm: FormGroup;
  Reply: string = '';
  file: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private auth: AuthService,
    private router: Router
  ) {
   
  }

  ngOnInit() {
    // this.body.adminId = this.auth.currentUser?.id;
    // console.log(this.body.adminId);

    // this.body.complaintId=location.href.split('/')[5]
    // console.log(this.body.complaintId)
    // this.complaintForm = this.formBuilder.group({
    //   reply: ['', Validators.required],
      // file: ['', Validators.required],
    };
  }


