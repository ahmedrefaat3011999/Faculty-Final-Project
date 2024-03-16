import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-blogform2',
  templateUrl: './blogform2.component.html',
  styleUrls: ['./blogform2.component.scss']
})
export class Blogform2Component {
  categories: any[] | undefined;
  selectedCategories:string;
  public Editor = ClassicEditor;
  editorContent: string;
  proid: string;

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
  
  

body:{
 
  createdBy: string,
  title: string,
  description: string,
  categoryId:string,
  isPublished: boolean,
  details:string
}={

  createdBy: "",
  title: "",
  description: "",
  categoryId: "",
  isPublished: false,
  details:""
};

// public string Description { get; set; }
// public string Details { get; set; }
// public Guid CreatedBy { get; set; }

updatebody:{
 
  blogId :string, 
  createdBy: string,
  title: string,
  description: string,
  categoryId:string,
  details:string
}={
  blogId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  categoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  title: "",
  description: "",
  details: "",
  createdBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
};








  constructor( private activatedroute: ActivatedRoute,private httpService:HttpService, private authserv:AuthService ,private router:Router) { 
   
  }
  users: any[] =[];
addform: FormGroup = new FormGroup({

  title: new FormControl('', [Validators.required]),
  Description: new FormControl('', [Validators.required]),
  CategoryId: new FormControl('', [Validators.required]),
  IsPublished: new FormControl(false, [Validators.required]),
  CreatedBy: new FormControl('', [Validators.required]),
  details: new FormControl('', [Validators.required]),

})

ngOnInit(): void {
  this.GetCategories();
  this.proid = this.activatedroute.snapshot.params['id'];
  if (this.proid != null) {
    this.httpService.GET(AdminController.GetBlog(this?.proid)).subscribe(
       (res) => {
        console.log(res);

        if (res != 'not found') {
          this.addform.controls['title'].setValue(res?.title || '');      
          this.addform.controls['Description'].setValue(res?.description || '');
          this.addform.controls['details'].setValue(res?.detail || '');
          this.addform.controls['CategoryId'].setValue(res?.categoryId || '');

      //    this.addform.get('CategoryId').setValue(res?.categoryId);
          this.updatebody.blogId=res?.blogId
          console.log( res?.categoryId+"-------------------");

        }
      },
    );
  }

this.authserv.getUserData( JSON.parse(localStorage.getItem("userToken")))


}

get titleControl() {
  return this.addform.controls['title'];
}
get detailsControl() {
  return this.addform.controls['details'];
}
get descriptionControl() {
  return this.addform.controls['Description'];
}
get CategoryIdControl() {
  return this.addform.controls['CategoryId'];
}
get IsPublishedControl() {
  return this.addform.controls['IsPublished'];
}
get CreatedByControl() {
  return this.addform.controls['CreatedBy'];
}


addblog(event:Event) {
 event.preventDefault();

 this.addform.controls['CreatedBy'].setValue(this.authserv?.id);
this.body.createdBy=this.authserv?.id
this.body.details=this.addform.controls['details'].value
this.body.title = this.addform.controls['title'].value;
this.body.description = this.addform.controls['Description'].value;
this.body.categoryId = this.addform.controls['CategoryId'].value;
this.body.isPublished = this.addform.controls['IsPublished'].value;
console.log(this.addform.valid);
console.log(this.body);
  if (this.addform.valid ) {
    if(this.proid==null){

        
        


      this.httpService.POST(AdminController.AddMainBlog,this.body).subscribe(
        (res)=>{
          console.log(res);
          this.router.navigate(['/blogs']);
        }
      );
      
    }else{
      this.updatebody.title = this.addform.controls['title'].value;
      this.updatebody.description = this.addform.controls['Description'].value;
      this.updatebody.categoryId = this.addform.controls['CategoryId'].value;
      this.updatebody.details = this.addform.controls['details'].value;
      this.httpService.PUT(AdminController.UpdateMainBlog, this.updatebody).subscribe(
        (res) => {
          console.log("Update successful: ", res);
          if (res.message!="Blog Not Found") {
            this.router.navigate(['/blogs']);

          }
        },
        (error) => {
          console.log("Update failed: ", error);
        }
      );
    }
  }
}

////////////
onCategoryChange(event) 
{
  this.addform.controls['CategoryId'].setValue(event.target.value);
   this.body.categoryId=event.target.value;
  console.log(this.body.categoryId); 
}

ontitlecahnge(word:string){
  this.addform.controls['title'].setValue(word);
  this.body.title=word
}
ondescripcahnge(word:string){
  this.addform.controls['Description'].setValue(word);
  this.body.description=word
}


GetCategories() {
  this.httpService.GET("settings/categories/dropdown")
    .subscribe(res => {
      console.log("GetCategories");
      this.categories = res;
     // console.log(res[0].id);     
  this.addform.controls['CategoryId'].setValue(res[0].id);
  this.body.categoryId=res[0].id;

    });
}

}