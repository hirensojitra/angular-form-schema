import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from './form-base';
import { FieldsControlService } from './form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FieldsControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FormBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: FieldsControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields as FormBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}