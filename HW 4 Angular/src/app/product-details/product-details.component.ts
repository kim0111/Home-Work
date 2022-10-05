import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { product } from 'src/models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: product | undefined;

  constructor(private route: ActivatedRoute, private service: ProductService) {
  }

  ngOnInit(): void {
    this.displayProduct();
  }

  displayProduct() {
    let id = this.route.snapshot.paramMap.get('id') ?? '0';
    let pr = this.service.getProductById(parseInt(id));
    if (typeof pr == undefined) {
      this.product = new product(0, 'empty', 'empty', 0);
    } else {
      this.product = pr;
    }
  }
}