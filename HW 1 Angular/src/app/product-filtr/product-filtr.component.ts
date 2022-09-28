import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { products } from "../products";

@Component({
  selector: 'app-product-filtr',
  templateUrl: './product-filtr.component.html',
  styleUrls: ['./product-filtr.component.css']
})
export class ProductFiltrComponent implements OnInit {
  @Output() change = new EventEmitter()
  products = products;

 
  ngOnInit(): void {
  }

  onFilterByCategory(filter:string){
  
      this.products=this.products.filter(x=>x.cat===filter);
    
  }

  onChange(newVal: any){
this.change.emit(newVal);
  }

}
