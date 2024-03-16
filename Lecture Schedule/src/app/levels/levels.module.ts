import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelsComponent } from './levels/levels.component';
import { AddLevelComponent } from './add-level/add-level.component';
import { LevelsRoutingModule } from './Levels-routing.module';



@NgModule({
  declarations: [
    LevelsComponent,
    AddLevelComponent
  ],
  imports: [
    CommonModule,
    LevelsRoutingModule
  ]
})
export class LevelsModule { }
