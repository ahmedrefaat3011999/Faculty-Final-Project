import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AllSchedulesComponent } from './All Schedules/AllSchedules.component';
import { AddSchedulesComponent } from './Add Schedules/AddSchedules.component';
import { SchedulesRoutingModule } from './Schedules-routing.module';

@NgModule({
  declarations: [AddSchedulesComponent, AllSchedulesComponent],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
  ],
})
export class SchedulesModule {}
