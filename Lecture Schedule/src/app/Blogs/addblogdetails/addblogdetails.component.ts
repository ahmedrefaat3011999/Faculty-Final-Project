import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-addblogdetails',
  templateUrl: './addblogdetails.component.html',
  styleUrls: ['./addblogdetails.component.scss']
})
export class AddblogdetailsComponent  {

  categories: any[];
  selectedCategories:string;
  public Editor = ClassicEditor;
  
blog:any;
  editorContent: string;
  public editorConfig = {

    toolbar: {
      items: [
        'heading', '|',
        'bold', 'italic',  '|',
        'bulletedList', 'numberedList', 'indent', 'outdent', '|',
         'insertTable', '|',
        'undo', 'redo'
      ]
    },
    language: 'en',

    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
 
  };
  


  constructor(private httpserv:HttpService, private authserv:AuthService ,private router:Router) { 
  }
  



id:string
ngOnInit(): void {
  this.id=window.location.href.split('/')[5];
  this.httpserv.GET(AdminController.GetBlog(this.id)).subscribe(
    (response) => {
   this.blog=response;
  console.log("-----------------------------------------------------------");
  console.log(response);
    });
}




}
