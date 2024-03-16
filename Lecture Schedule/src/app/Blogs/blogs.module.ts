import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogsRoutingModule } from './blogs-routing.module';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { Blogform2Component } from './addmainblog/blogform2.component';
import { AddblogdetailsComponent } from './addblogdetails/addblogdetails.component';


@NgModule({
  declarations: [
   AllblogsComponent,
 Blogform2Component,
 AddblogdetailsComponent
 
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    BlogsRoutingModule,
    CKEditorModule,

  ]
})
export class BlogsModule { }
