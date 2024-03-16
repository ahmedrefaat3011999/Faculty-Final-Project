import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllTeachersComponent } from './All Teachers/AllTeachers.component';
import { TeacherDetailsComponent } from './TeacherDetails/Teacher-details.component';
import { AddTeachersComponent } from './Add Teachers/AddTeachers.component';

const routes: Routes = [
   { path: '' ,  component: AddTeachersComponent },
   { path: 'details/:id' ,  component: TeacherDetailsComponent },
   { path: 'AllTeachers' ,  component:AllTeachersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
