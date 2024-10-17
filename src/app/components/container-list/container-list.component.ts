import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirestoreService } from '@app/services';

@Component({
  selector: 'app-container-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-list.component.html',
  styles: `
    :host {
      width: 100%;
    }

    .selected {
      border: 1px solid #0d6efd;
    }
  `,
})
export class ContainerListComponent {
  @Output() getItemSelected = new EventEmitter();
  @Input() items: any[] = [];

  itemSelected: any = null;

  onItemSelected(movie: any): void {
    this.itemSelected = movie;

    this.getItemSelected.emit(movie);
  }
}
