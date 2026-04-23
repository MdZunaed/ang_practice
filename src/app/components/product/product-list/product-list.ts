import { Component, signal } from '@angular/core';
import { Products } from '../../../services/products/products';
import { Product } from '../../../services/products/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
    constructor(private productService: Products){
  }
    products =signal<Product[]|undefined>(undefined);
  ngOnInit(){

    this.productService.getProducts().subscribe((res:any)=>{
      this.products.set(res.products);
      console.log(this.products());
      
    })
  }
}
