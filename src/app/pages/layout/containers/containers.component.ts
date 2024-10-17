import { Component, TemplateRef } from '@angular/core';
import { ContainerDeleteComponent } from '@app/components/container-delete/container-delete.component';
import { ContainerListComponent } from '@app/components/container-list/container-list.component';
import { ContainerRegisterComponent } from '@app/components/container-register/container-register.component';
import { ContainerUpdateComponent } from '@app/components/container-update/container-update.component';
import { FirestoreService, ToastsContainer, ToastService } from '@app/services';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-containers',
  standalone: true,
  imports: [
    ContainerListComponent,
    ContainerRegisterComponent,
    ContainerUpdateComponent,
    ContainerDeleteComponent,

    NgbTooltipModule,
    ToastsContainer,
  ],
  templateUrl: './containers.component.html',
  styleUrl: './containers.component.css',
})
export class ContainersComponent {
  errorText!: string;
  container: any = null;
  containersList: any[] = [];

  constructor(
    private _firestoreService: FirestoreService,
    private _toastService: ToastService
  ) {}

  async ngOnInit() {
    await this.getContainerList();
  }

  async getContainerList() {
    this.containersList = await this._firestoreService.getAllDocument<any>(
      'containers'
    );
  }

  onContainerSelected(container: any): void {
    this.container = container;
  }

  async onRegister(form: any, template: TemplateRef<any>) {
    try {
      await this._firestoreService.addDocumentWithCustomId(
        'containers',
        form.id.toString(),
        form
      );

      this.errorText = 'Se ha dado de alta correctamente';

      this._toastService.show({
        template,
        classname: 'bg-success text-light',
        delay: 2000,
      });

      this.getContainerList();
    } catch (error) {
      this.errorText = 'Ha ocurrio un error. Intentelo de nuevo.';

      this._toastService.show({
        template,
        classname: 'bg-danger text-light',
        delay: 2000,
      });
    }
  }

  async onUpdate(form: any, template: TemplateRef<any>) {
    try {
      await this._firestoreService.updateDocumentById(
        'containers',
        form.id,
        form
      );

      this.errorText = 'Se ha modificado correctamente';

      this._toastService.show({
        template,
        classname: 'bg-success text-light',
        delay: 2000,
      });

      this.getContainerList();
    } catch (error) {
      this.errorText = 'Ha ocurrio un error. Intentelo de nuevo.';

      this._toastService.show({
        template,
        classname: 'bg-danger text-light',
        delay: 2000,
      });
    }
  }

  async onDelete(id: any, template: TemplateRef<any>) {
    try {
      await this._firestoreService.deleteDocumentById(
        'containers',
        id.toString()
      );

      this.errorText = 'Se ha eliminado correctamente';

      this._toastService.show({
        template,
        classname: 'bg-success text-light',
        delay: 2000,
      });

      this.container = null;

      this.getContainerList();
    } catch (error) {
      this.errorText = 'Ha ocurrio un error. Intentelo de nuevo.';

      this._toastService.show({
        template,
        classname: 'bg-danger text-light',
        delay: 2000,
      });
    }
  }
}
