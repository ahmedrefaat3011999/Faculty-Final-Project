import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  radiomodel = 1;

  public checkboxGroupForm: UntypedFormGroup;

  public radioGroupForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });

    this.radioGroupForm = this.formBuilder.group({
      'model': 1
    });
  }

}
