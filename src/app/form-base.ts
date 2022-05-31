export class FormBase<T> {
  value: T|undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {value: string, text: string}[];
  blankNext: boolean;
  constructor(options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      options?: {value: string, text: string}[];
      blankNext? : boolean
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || 'textbox';
    this.type = options.type || '';
    this.options = options.options || [];
    this.blankNext = options.blankNext || false;
  }
}
