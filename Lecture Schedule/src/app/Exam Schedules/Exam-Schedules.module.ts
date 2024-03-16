import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AllSchedulesComponent } from './All Schedules/AllSchedules.component';
import { AddSchedulesComponent } from './Add Schedules/AddSchedules.component';
import { ExamSchedulesRoutingModule } from './Exam-Schedules-routing.module';
// import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AddSchedulesComponent, AllSchedulesComponent],
  imports: [
    CommonModule,
    ExamSchedulesRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
  ],
})
export class ExamSchedulesModule {}
