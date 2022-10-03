import { Component, OnInit } from '@angular/core';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  someProducts: products[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(obj: products) {
    console.log(obj);
    this.someProducts.push(obj);
  }

}

