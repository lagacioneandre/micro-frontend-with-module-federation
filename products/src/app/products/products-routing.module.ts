import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  loadChildren: () => import('./list-products/list-products.module').then(m => m.ListProductsModule)
}, {
  path: 'add-products',
  component: ProductsComponent,
  loadChildren: () => import('./add-products/add-products.module').then(m => m.AddProductsModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
