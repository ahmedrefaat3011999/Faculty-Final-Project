import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallsRoutingModule } from './halls-routing.module';
import { AllHallsComponent } from './all-halls/all-halls.component';
import { AddHallsComponent } from './add-halls/add-halls.component';



@NgModule({
  declarations: [
    AllHallsComponent,
    AddHallsComponent
  ],
  imports: [
    CommonModule,
    HallsRoutingModule
  ]
})
export class HallsModule { }
