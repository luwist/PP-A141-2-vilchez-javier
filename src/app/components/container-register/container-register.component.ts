import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { InputErrorComponent } from '../input-error';
import { FirestoreService, ToastService } from '@app/services';

@Component({
  selector: 'app-container-register',
  standalone: true,
  imports: [CommonModule, InputErrorComponent, ReactiveFormsModule],
  templateUrl: './container-register.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `,
})
export class ContainerRegisterComponent {
  @Output() containerForm = new EventEmitter();

  form = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      this.minLengthNumberValidator(3),
    ]),
    capacity: new FormControl('', [Validators.required, Validators.min(1)]),
    company: new FormControl('', Validators.required),
  });

  minLengthNumberValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value && value.toString().length < minLength) {
        return {
          minLengthNumber: {
            requiredLength: minLength,
            actualLength: value.toString().length,
          },
        };
      }
      return null;
    };
  }

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  onRegister() {
    const data = this.form.getRawValue();

    this.form.markAsPending();
    this.form.reset();

    this.containerForm.emit(data);
  }
}
