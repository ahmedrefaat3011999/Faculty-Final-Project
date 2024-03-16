import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminController } from 'src/app/shared/controller/AdminController';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-AllCategories',
  templateUrl: './AllCategories.component.html',
  styleUrls: ['./AllCategories.component.scss'],
})
export class AllCategoriesComponent {
  constructor(
    private httpService: HttpService,
    private authserv: AuthService,
    private router: Router
  ) {}

  Categories: any[] = [];
  subcategorys: any[] = [];

  ngOnInit(): void {
    this.GetAllCategories();
  }

  GetAllCategories() {
    this.httpService
      .GET(AdminController.GetAllCategories)
      .subscribe((data: any) => {
        console.log(data);
        this.Categories = data;
        console.log(
          this.Categories[1].subcategoryNames +
            '============================================'
        );
      });
  }
  delete(id: any) {
    // this.Categories = this.Categories.filter(p => p.CategoryId != id);
    this.httpService
      .DELETE(AdminController.DeleteCategory(id))
      .subscribe(
        () =>
          (this.Categories = this.Categories.filter((p) => p.categoryId != id))
      );

    console.log(id);
  }

  UsingInHome(id: any) {

    this.httpService
    .PUT(AdminController.UpdateUsingInHomeStatus(id))
    .subscribe((res) => {
      console.log(res, 'UpdateUsingInHomeStatus ');
      this.Categories.forEach((data) => {
        if (data.categoryId == id) {
          data.usingInHome = !data.usingInHome;
         
        }
      });
    });


  }

  deleteSubCategory(id: any) {
    this?.Categories.forEach((category) => {
      category?.subcategorys?.forEach((subcategory) => {
        this.httpService
          .DELETE(AdminController.DeleteSubCategory(id))
          .subscribe(() => {
            category.subcategorys = category.subcategorys.filter(
              (subcat) => subcat.subcategoryid != id
            );
          });
  
        console.log(id);
      });
    });
  }
}
