// Must read and understand https://bit.ly/3rJG9q3

import { Component, Input, Injector, ViewChild } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FaInputComponent,
      multi: true,
    },
  ],
})
export class FaInputComponent implements ControlValueAccessor {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() type = 'text';
  @Input() required = false;
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective | undefined;
  @Input() formControl!: FormControl;
  @Input() formControlName: string = '';

  constructor(private controlContainer: ControlContainer) {}

  get control() {
    return (
      this.formControl ||
      this.controlContainer.control?.get(this.formControlName)
    );
  }

  registerOnTouched(fn: any): void {
    if (this.formControlDirective?.valueAccessor) {
      this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }
  }

  registerOnChange(fn: any): void {
    if (this.formControlDirective?.valueAccessor) {
      this.formControlDirective.valueAccessor.registerOnChange(fn);
    }
  }

  writeValue(obj: any): void {
    if (this.formControlDirective?.valueAccessor) {
      this.formControlDirective.valueAccessor.writeValue(obj);
    }
  }

  // setDisabledState(isDisabled: boolean): void {
  //   if (this.formControlDirective.valueAccessor !== null) {
  //     this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  //   }
  // }
}
