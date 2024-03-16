import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { Blogform2Component } from './addmainblog/blogform2.component';
import { AddblogdetailsComponent } from './addblogdetails/addblogdetails.component';



const routes: Routes = [
    { path: '' ,  component: AllblogsComponent },
   { path: 'addmainblog' ,  component: Blogform2Component },
   { path: 'addmainblog/:id' ,  component: Blogform2Component },
   { path: 'blogDetails/:id' ,  component: AddblogdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
