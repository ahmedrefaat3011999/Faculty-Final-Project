import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-addCategory',
  templateUrl: './addCategory.component.html',
  styleUrls: ['./addCategory.component.scss'],
})
export class AddCategoryComponent {
  myForm: FormGroup;
  proid: string;
  errorMessage: string;

  // addCategory(categoryName: string, categoryImage: File): void {
  //   const formData: FormData = new FormData();
  //   formData.append('categoryName', categoryName);
  //   formData.append('categoryImage', categoryImage);

  constructor(
    private httpserv: HttpService,
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedroute: ActivatedRoute
  ) {
    this.myForm = new FormGroup({
      categoryName: new FormControl('', Validators.required),
      CategoryImage: new FormControl('', Validators.required),
    });
  }

  fromData: FormData = new FormData();

  body: {
    categoryId: string;
    categoryName: string;
    CategoryImage: string;
  } = {
    categoryId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    categoryName: '',
    CategoryImage: '',
  };

  ngOnInit() {
    this.proid = this.activatedroute.snapshot.params['id'];
    this.myForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      categoryImage: [null, Validators.required],
    });
    
  }

  addCategory() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      if (this.proid == null) {
        this.fromData.append(
          'categoryName',
          this.myForm.controls['categoryName'].value
        );
        this.fromData.append('img', this.file, this.file.name);

        console.log(this.myForm.value);
        console.log(this.file);

        this.httpserv
          .POST(AdminController.AddCategory, this.fromData)
          .subscribe({
            next: (res) => {
              this.router.navigate(['/Category']);
              // console.log('res' + res);
            },
          });
      } else {
        // this.fromData.append('categoryId', this.proid);
        this.fromData.append(
 'CategoryName',
          this.myForm.controls['categoryName'].value
        );
        this.fromData.append('img', this.file, this.file.name);
    
        console.log(this.file);
        console.log(this.fromData.get('img'));
        
        
        this.httpserv
          .PUT(AdminController.UpdateCategories(this.proid), this.fromData)
          .subscribe({
            next: (res) => {
              console.log(res + 'eeeeeeeeeeeeeeeeeeeeeeeeee');
              this.router.navigate(['/Category']);
            },
            error:(r)=>{console.log(r);
            }
          });
      }
    } else {
      this.errorMessage = 'required field!';
    }
  }

  file: File = null;
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      ('');
      this.myForm.controls['categoryImage'].setValue(this.file.name);
    }
  }
}
