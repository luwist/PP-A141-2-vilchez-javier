import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FirestoreService } from '@app/services';

@Component({
  selector: 'app-container-delete',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './container-delete.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `,
})
export class ContainerDeleteComponent {
  @Output() containerFormUpdate = new EventEmitter();
  @Input() container: any;

  constructor(private _firestoreService: FirestoreService) {}

  onRegister(e: any) {
    e.preventDefault();

    this._firestoreService.deleteDocumentById('containers', this.container.id);

    this.containerFormUpdate.emit(this.container.id);
  }
}
