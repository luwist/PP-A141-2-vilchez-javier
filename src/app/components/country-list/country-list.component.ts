import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-list.component.html',
  styles: `
    :host {
      width: 100%;
    }

    .selected {
      border: 1px solid #0d6efd;
    }
  `,
})
export class CountryListComponent {
  @Output() selectItem = new EventEmitter<any>();
  items$!: Observable<any>;
  itemSelected: any = null;

  constructor(private _httpClient: HttpClient) {}

  ngOnInit(): void {
    this.items$ = this._httpClient.get(
      'https://restcountries.com/v3.1/region/South%20America'
    );
  }

  onItemSelected(item: any): void {
    this.itemSelected = item;

    this.selectItem.emit(item);
  }
}
