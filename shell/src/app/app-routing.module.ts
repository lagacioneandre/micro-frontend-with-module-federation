import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./example/example.module').then(m => m.ExampleModule),
  pathMatch: 'full'
}, {
  path: 'products',
  loadChildren: () => import('products/Module').then(m => m.ProductsModule)
}, {
  path: 'users',
  loadChildren: () => import('users/Module').then(m => m.UsersModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
