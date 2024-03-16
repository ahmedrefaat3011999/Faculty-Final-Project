import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FqaRoutingModule } from './fqa-routing.module';
import { AllFqaComponent } from './all-fqa/all-fqa.component';
import { FormFqaComponent } from './form-fqa/form-fqa.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@NgModule({
  declarations: [AllFqaComponent, FormFqaComponent],
  imports: [
    CommonModule,
    FqaRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    CKEditorModule,
  ],
})
export class FqaModule {}
