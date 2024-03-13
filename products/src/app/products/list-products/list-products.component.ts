import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  private readonly router = inject(Router);

  addProduct() {
    this.router.navigate(['products/add-products']);
  }

}
