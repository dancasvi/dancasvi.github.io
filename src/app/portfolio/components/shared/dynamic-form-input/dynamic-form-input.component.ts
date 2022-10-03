import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomFormField } from '../simple-add-form/custom-form-field';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss']
})
export class DynamicFormInputComponent implements OnInit {

  @Input() input: CustomFormField<string>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.input.key].valid; }

  ngOnInit(): void {
    this.form.get(this.input.key).setValue(this.input.value);
  }
}