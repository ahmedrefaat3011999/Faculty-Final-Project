import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {
  id: string;
  myForm:FormGroup
  catid: string;
  subid: string;

  constructor(private httpserv:HttpService,private auth:AuthService,private router:Router,    private formBuilder: FormBuilder,
    private activatedroute: ActivatedRoute
    ) {
      this.id=window.location.href.split('/')[5];

    this.myForm = this.formBuilder.group({
      name: [null, Validators.required]
    });
     }

     body:{
      name: string,
      catid: string,
     
    }={
      name: "",
      catid:"3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
    
  ngOnInit(): void {
    this.catid = this.activatedroute.snapshot.params['catid'];
    this.subid = this.activatedroute.snapshot.params['subid'];

    if(this.subid !=null)
    {
      this.httpserv.GET(AdminController.GetSubCategory(this.subid)).subscribe((res)=>{
     this.body.name=res
     this.myForm.controls['name'].setValue(res);
        }
      );
    
    }

  }

 
  addSubCategory() {
    if(this.myForm.valid){
      if(this.subid == null){
        this.body.catid = this.catid;
        this.body.name = this.myForm.controls['name'].value;
        
        this.httpserv.POST(AdminController.AddSubcategory, this.body)
          .subscribe(response => {
            console.log(this.body);
          
            console.log(response);
            this.router.navigate(['/Category']);
          });
      }else{
        this.body.catid = this.subid;
        this.body.name = this.myForm.controls['name'].value;
        console.log(this.catid);

        this.httpserv
          .PUT(AdminController.UpdateSubCategory(this.body.catid), this.body)
          .subscribe({
            next: (res) => {
              console.log(res );
              this.router.navigate(['/Category']);
            },
          });
      }
    
    }
     
  }
}
