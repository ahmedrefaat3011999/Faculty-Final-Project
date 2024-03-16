import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TeacherRoutingModule } from './Teachers-routing.module';
import { AddTeachersComponent } from './Add Teachers/AddTeachers.component';
import { TeacherDetailsComponent } from './TeacherDetails/Teacher-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AllTeachersComponent } from './All Teachers/AllTeachers.component';



@NgModule({
  declarations: [
   AddTeachersComponent, 
   TeacherDetailsComponent, AllTeachersComponent,
   
    ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class TeacherModule { }
