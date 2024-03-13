import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-products.component';
import { AddProductsRoutingModule } from './add-products-routing.module';

@NgModule({
  declarations: [
    AddProductsComponent
  ],
  imports: [
    CommonModule,
    AddProductsRoutingModule,
  ]
})
export class AddProductsModule { }
