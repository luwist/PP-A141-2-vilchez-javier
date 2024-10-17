import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  standalone: true,
  imports: [],
  template: `
    @if (control.invalid && (control.touched || control.dirty)) { @if
    (control.hasError('required')) {
    <p class="form-text text-danger text-end">Este campo es requerido</p>
    } @if (control.hasError('email')) {
    <p class="form-text text-danger text-end">
      El correo electronico es incorrecto
    </p>
    } @if (control.hasError('minlength')) {
    <p class="form-text text-danger text-end">
      No cumple con la cantidad minima
    </p>
    } @if (control.hasError('minLengthNumber')) {
    <p class="form-text text-danger text-end">
      No cumple con la cantidad minima
    </p>
    } @if (control.hasError('min')) {
    <p class="form-text text-danger text-end">El numero debe ser mayor a 0</p>
    } }
  `,
})
export class InputErrorComponent {
  @Input('control') control!: AbstractControl;
}
