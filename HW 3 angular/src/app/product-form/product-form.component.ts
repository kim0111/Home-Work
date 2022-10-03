
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { purchase, products } from '../products';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter()

  purchase = Object.values(purchase);
  name: string = '';
  address: string = '';
  selectedPurchase: string = purchase.builder;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    let obj: products = { name: this.name, address: this.address, purchase: this.selectedPurchase }
    this.onAdd.emit(obj);
  }
}
