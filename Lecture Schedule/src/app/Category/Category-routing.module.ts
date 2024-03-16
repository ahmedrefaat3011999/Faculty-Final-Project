import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './addCategory/addCategory.component';
import { AllCategoriesComponent } from './AllCategories/AllCategories.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';




const routes: Routes = [
    { path: '' ,  component: AllCategoriesComponent},
    { path: 'addCategory' ,  component: AddCategoryComponent },
    { path: 'addCategory/:id' ,  component: AddCategoryComponent },
    { path: 'AddSubCategory/:catid' ,  component: AddSubCategoryComponent},
    { path: 'AddSubCategory/:catid/:subid' ,  component: AddSubCategoryComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
