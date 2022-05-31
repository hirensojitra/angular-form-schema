import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DropdownFields } from './form-dropdown';
import { FormBase } from './form-base';
import { TextboxFields } from './form-textbox';
import { RadioFields } from './form-radio';
@Injectable()
export class FormService {
  // TODO: get from a remote source of field metadata
  getFields() {
    const fields: FormBase<string>[] = [
      new DropdownFields({
        key: 'brave',
        label: 'Bravery Rating',
        required: true,
        options: [
          { value: 'solid', text: 'Solid' },
          { value: 'great', text: 'Great' },
          { value: 'good', text: 'Good' },
          { value: 'unproven', text: 'Unproven' },
        ],
        value: 'great',
        order: 1,
      }),
      new RadioFields({
        key: 'gender',
        label: 'Gender',
        required: true,
        options: [
          { value: 'male', text: 'Male' },
          { value: 'female', text: 'Female' }
        ],
        value: 'male',
        order: 4,
      }),
      new TextboxFields({
        key: 'firstName',
        label: 'First name',
        value: 'Hiren Sojitra',
        required: true,
        order: 1,
      }),
      new TextboxFields({
        key: 'emailAddress',
        label: 'Email',
        type: 'text',
        order: 2,
      }),
    ];
    return of(fields.sort((a, b) => a.order - b.order));
  }
}