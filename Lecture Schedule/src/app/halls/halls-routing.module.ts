import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHallsComponent } from './add-halls/add-halls.component';
import { AllHallsComponent } from './all-halls/all-halls.component';



const routes: Routes = [
   { path: '' ,  component: AddHallsComponent },
   { path: 'AllHalls' ,  component:AllHallsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HallsRoutingModule { }
