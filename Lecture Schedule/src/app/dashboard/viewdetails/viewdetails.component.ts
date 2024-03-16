import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {
user:any;

id:string;
  constructor(private httpclient:HttpClient,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
 
      this.id=window.location.href.split('/')[5];
    const headers = new HttpHeaders({
      "Accept": 'application/json',
          'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
          'Pragma': 'no-cache',
          'Expires': '0'
    });
    this.httpclient.get(`https://workneeing-back-end.workneering.com/api/v1/Admin/Usersearch/${this.id}`,{ headers })
    .subscribe(
      (response) => {
        // Handle the successful response
     this.user=response;
    console.log("-----------------------------------------------------------");
    console.log(response);
  
      },
      (error) => {
        // Handle any errors
        console.error('Error:', error);
      }
    );
  
  }


Delete(){
 
  const headers = new HttpHeaders({
    "Accept": 'application/json',
        'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        'Pragma': 'no-cache',
        'Expires': '0'
  });
  this.httpclient.post(`https://workneeing-back-end.workneering.com/api/v1/Admin/DeleteUSer/${this.id}`,{ headers })
  .subscribe(
    (response) => {
      window.location.reload()
  console.log(response);

    },
    (error) => {
      window.location.reload();
      console.error('Error:', error);
    }
  );
}
Block(){
  console.log(this.id);
  
    const headers = new HttpHeaders({
      "Accept": 'application/json',
          'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
          'Pragma': 'no-cache',
          'Expires': '0'
    });
    this.httpclient.post(`https://workneeing-back-end.workneering.com/api/v1/Admin/SuspendUser/${this.id}`,{ headers })
    .subscribe(
      (response) => {
        window.location.reload()
   console.log("nnnnnnnnnn");
   
  
      },
      (error) => {
        window.location.reload();
        console.error('Error:', error);
      }
    );
}

UnBlock(){
  
    const headers = new HttpHeaders({
      "Accept": 'application/json',
          'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
          'Pragma': 'no-cache',
          'Expires': '0'
    });
    this.httpclient.post(`https://workneeing-back-end.workneering.com/api/v1/Admin/UnSuspendUser/${this.id}`,{ headers })
    .subscribe(
      (response) => {
        window.location.reload();
    console.log(response);
   
  
      },
      (error) => {
        window.location.reload();
        console.error('Error:', error);
      }
    );
}

}
