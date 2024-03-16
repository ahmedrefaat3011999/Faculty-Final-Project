import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-form-fqa',
  templateUrl: './form-fqa.component.html',
  styleUrls: ['./form-fqa.component.scss'],
})
export class FormFqaComponent implements OnInit {
  createFQA: FormGroup;
  errorMessage: string;
  successMessage: any;
  proid: string;
  public Editor = ClassicEditor;
  editorContent: string;
  public editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        '|',
        'bulletedList',
        'numberedList',
        'indent',
        'outdent',
        '|',
        'insertTable',
        '|',
        'undo',
        'redo',
      ],
    },
    language: 'en',

    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
  };

  constructor(
    private _HttpService: HttpService,
    private _Router: Router,
    private activatedroute: ActivatedRoute
  ) {
    this.createFQA = new FormGroup({
      type: new FormControl('company', Validators.required),
      question: new FormControl(null, Validators.required),
      answer: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.proid = this.activatedroute.snapshot.params['id'];
    if (this.proid != null) {
      this._HttpService.GET(`Admin/getbyid/${this.proid}`).subscribe({
        next: (res) => {
          console.log(res + '/////////////////');
          if (res != 'not found') {
            console.log(res + '----------------');
            this.createFQA.controls['answer'].setValue(res.answer);
            this.createFQA.controls['question'].setValue(res.question);
            this.createFQA.controls['type'].setValue(res.type);
          }
        },
      });
    }
  }

  body: {
    fqaId: string;
    type: string;
    question: string;
    answer: string;
  } = {
    fqaId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    type: '',
    question: '',
    answer: '',
  };

  submitFQA() {
    // event.preventDefault()
    if (this.createFQA.valid) {
      if (this.proid == null) {
        console.log(this.createFQA.value);
        console.log('added');

        this._HttpService.POST(`Admin/AddFQA`, this.createFQA.value).subscribe({
          next: (res) => {
            console.log(res);
            this.successMessage = 'FQA added successfully';
            this._Router.navigate(['/fqas']);
          },
        });
      } else {
        this.body.fqaId = this.proid;
        this.body.answer = this.createFQA.controls['answer'].value;
        this.body.question = this.createFQA.controls['question'].value;
        this.body.type = this.createFQA.controls['type'].value;
        console.log(this.body);
        console.log('updated');
        this._HttpService.PUT('Admin/UpdateFQA', this.body).subscribe({
          next: (res) => {
            console.log(res);
            this._Router.navigate(['/fqas']);
          },
        });
      }
    } else {
      this.errorMessage = 'required field!';
    }
  }

  type(type: any) {
    console.log(type.target.value);
  }
}
