import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FirestoreService } from '@app/services';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styles: `
    :host {
      width: 100%;
    }

    .selected {
      border: 1px solid #0d6efd;
    }
  `,
})
export class ProductTableComponent {
  @Output() getItemSelected = new EventEmitter();
  items: any[] = [];

  itemSelected: any = null;

  constructor(private _firestoreService: FirestoreService) {}

  async ngOnInit() {
    this.items = await this._firestoreService.getAllDocument<any>('products');
  }

  onItemSelected(movie: any): void {
    this.itemSelected = movie;

    this.getItemSelected.emit(movie);
  }
}
