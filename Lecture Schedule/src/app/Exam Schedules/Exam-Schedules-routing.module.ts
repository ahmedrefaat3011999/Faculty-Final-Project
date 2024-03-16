import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSchedulesComponent } from './Add Schedules/AddSchedules.component';
import { AllSchedulesComponent } from './All Schedules/AllSchedules.component';


const routes: Routes = [
   { path: '' ,  component: AddSchedulesComponent },
   { path: 'AllSchedules' ,  component:AllSchedulesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamSchedulesRoutingModule { }
