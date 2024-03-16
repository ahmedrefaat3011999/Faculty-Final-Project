import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-following_add_Reply',
  templateUrl: './following_add_Reply.component.html',
  styleUrls: ['./following_add_Reply.component.scss'],
})
export class following_add_ReplyComponent implements OnInit {
  complaintForm: FormGroup;
  Reply: string = '';
  file: string = '';
  details: any = {};;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private auth: AuthService,
    private router: Router
  ) {
   
  }

  ngOnInit() {
    this.body.adminId = this.auth.currentUser?.id;
    console.log(this.body.adminId);
    this.body.complaintId=location.href.split('/')[5]
    console.log(this.body.complaintId)
    this.getComplaintDetails()
    this.complaintForm = this.formBuilder.group({
      reply: ['', Validators.required],
      // file: ['', Validators.required],
    });
  }
  body: {
     adminId: string; reply: string; complaintId: any, file: any 
} = {
    reply: '',
    adminId: '',
    complaintId: '',
    file: null,
  };

  // complaintList: { reply: string }[];

  submitComplaint(complaintForm: FormGroup) {
    if (this.complaintForm.invalid) {
      return;
    }
    this.body.reply = complaintForm.controls['reply'].value;

    const formData = new FormData();
    formData.append('file', this.body.file,this.body.file?.name);
    formData.append('adminId', this.body.adminId);
    formData.append('reply', this.body.reply);
    formData.append('complaintId', this.body.complaintId);

    console.log(this.body);
    
    const headers = new HttpHeaders({
      "Accept": 'application/json',
          'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
          'Pragma': 'no-cache',
          'Expires': '0'
    });
   
      this.http.POST(AdminController.AddComplaintReply,formData).subscribe(
        (response) => {
          console.log('Data posted successfully:', response);
          // const routePath = `/ticketSupport/follow_Add_Replies/${response.id}`;
          // console.log(routePath);
          // this.router.navigate([routePath]);

        },
        (error) => {
          console.error('Error posting data:', error);
        }
      );
      complaintForm.reset();
    }
  
  fun(event: any) {
    this.body.file = event.target.files[0];
    console.log(this.body.file);
  }
 
  getComplaintDetails(){
    this.http.GET(AdminController.GetComplaintDetails(this.body.complaintId)).subscribe((response)=>{
      console.log(JSON.stringify(response) +"this is response GetComplaintDetails")
      this.details=response
    })
  }
}

  

