import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputErrorComponent } from '../input-error';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputErrorComponent],
  templateUrl: './container-update.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `,
})
export class ContainerUpdateComponent {
  @Output() containerFormUpdate = new EventEmitter();
  @Input() container: any;

  form = new FormGroup({
    capacity: new FormControl(''),
    company: new FormControl(''),
  });

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  onRegister() {
    const data = this.form.getRawValue();

    this.form.markAsPending();
    this.form.reset();

    this.containerFormUpdate.emit(data);
  }
}
