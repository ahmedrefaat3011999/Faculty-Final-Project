import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryComponent } from './addCategory/addCategory.component';
import { AllCategoriesComponent } from './AllCategories/AllCategories.component';
import { CategoryRoutingModule } from './Category-routing.module';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@NgModule({
  declarations: [
    AllCategoriesComponent,
    AddCategoryComponent,

    AddSubCategoryComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    CategoryRoutingModule,
    FormsModule,
    
  ],
})
export class CategoryModule {}
