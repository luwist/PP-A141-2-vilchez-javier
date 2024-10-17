import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FirestoreService } from '@app/services';
import { Observable } from 'rxjs';
import { ProductTableComponent } from '../../../components/product-table/product-table.component';
import { ProductDetailComponent } from '@app/components/product-detail/product-detail.component';
import { CountryDetailComponent } from '@app/components/country-detail/country-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductTableComponent,
    ProductDetailComponent,
    CountryDetailComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  product: any;
  country$!: Observable<any>;

  constructor(
    private _httpClient: HttpClient,
    private _firestoreService: FirestoreService
  ) {}

  onProductSelected(product: any): void {
    this.product = product;
    this.country$ = this._httpClient.get(
      `https://restcountries.com/v3.1/name/${product.country}`
    );
  }
}
