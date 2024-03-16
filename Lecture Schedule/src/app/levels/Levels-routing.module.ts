import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelsComponent } from './levels/levels.component';
import { AddLevelComponent } from './add-level/add-level.component';



const routes: Routes = [
   { path: '' ,  component: LevelsComponent },
   { path: 'AddLevel' ,  component: AddLevelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelsRoutingModule { }
