import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  MinValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputErrorComponent } from '@app/components';
import { CountryListComponent } from '@app/components/country-list/country-list.component';
import { FirestoreService, ToastsContainer, ToastService } from '@app/services';
import {
  NgbDatepickerModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    InputErrorComponent,
    CountryListComponent,

    NgbTooltipModule,
    ToastsContainer,
  ],
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.css',
})
export class RegisterProductComponent {
  errorText!: string;
  buttonText: string = 'Dar de alta';

  form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    price: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });

  constructor(
    private _firestoreService: FirestoreService,
    private _toastService: ToastService
  ) {}

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  onCountrySelected(pais: any): void {
    this.form.patchValue({
      country: pais.name.common,
    });
  }

  async onRegister(template: TemplateRef<any>) {
    try {
      const data = this.form.getRawValue();

      this.form.markAsPending();
      this.buttonText = 'Cargando...';

      await this._firestoreService.addDocument('products', data);

      this.form.reset();

      this.errorText = 'Se ha dado de alta correctamente';

      this._toastService.show({
        template,
        classname: 'bg-success text-light',
        delay: 2000,
      });
    } catch (error) {
      this.errorText = 'Ha ocurrio un error. Intentelo de nuevo.';

      this._toastService.show({
        template,
        classname: 'bg-danger text-light',
        delay: 2000,
      });
    } finally {
      this.buttonText = 'Dar de alta';
    }
  }
}
