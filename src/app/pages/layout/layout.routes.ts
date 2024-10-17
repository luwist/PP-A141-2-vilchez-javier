import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'alta-producto',
        loadComponent: () =>
          import('./register-product/register-product.component').then(
            (m) => m.RegisterProductComponent
          ),
      },
      {
        path: 'productos',
        loadComponent: () =>
          import('./products/products.component').then(
            (m) => m.ProductsComponent
          ),
      },
    ],
  },
];
