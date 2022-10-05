import { Injectable } from '@angular/core';
import { product, products } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: product[] = products;

  constructor() { }

  getProducts() {    
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find((item) => item.id === id);
  }
  deleteProductById(id: number) {
    return this.products = this.products.filter((item) => item.id !== id);
  }
}