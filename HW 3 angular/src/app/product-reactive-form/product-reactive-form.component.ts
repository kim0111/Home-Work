import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { purchase, products } from '../products';

@Component({
  selector: 'app-product-reactive-form',
  templateUrl: './product-reactive-form.component.html',
  styleUrls: ['./product-reactive-form.component.css']
})

export class ProductReactiveFormComponent implements OnInit {

  @Output() onAdd = new EventEmitter();

  myForm : FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    address : new FormControl("", [Validators.required]),
    purchase: new FormControl(purchase.builder, [Validators.required])
  });

  purchase = Object.values(purchase);

  constructor() { }

  ngOnInit(): void {
  }

  addItem(forms: FormGroup){
    let name = forms.controls["name"].value;
    let addr = forms.controls["address"].value;
    let purchase = forms.controls["purchase"].value;

    let obj : products = {name: name, address: addr, purchase: purchase}

    this.onAdd.emit(obj);
  }

}
