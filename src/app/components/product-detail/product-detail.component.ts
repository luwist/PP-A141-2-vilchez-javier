import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `,
})
export class ProductDetailComponent {
  @Input() product: any;
}
