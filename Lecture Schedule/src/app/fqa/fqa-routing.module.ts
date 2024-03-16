import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFqaComponent } from './all-fqa/all-fqa.component';
import { FormFqaComponent } from './form-fqa/form-fqa.component';


const routes: Routes = [
   { path: '' ,  component: AllFqaComponent },
   { path: 'form/:id' ,  component: FormFqaComponent },
   { path: 'form' ,  component: FormFqaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FqaRoutingModule { }
