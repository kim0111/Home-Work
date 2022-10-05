import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product} from 'src/models';
import { ProductService } from '../product.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: product[] = [];

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.Products();
  }

  Products() {
    this.products = this.service.getProducts();
  }

  Details(id: number) {
    this.router.navigate(['games', id]);
  }

  delProduct(id: number) {
    this.products = this.service.deleteProductById(id);
  }
}