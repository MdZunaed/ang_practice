import { Component, signal } from '@angular/core';
import { Products } from '../../services/products/products';
import { Product } from '../../services/products/product';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
products =signal<Product[]|undefined>(undefined);
  constructor(private productService: Products){
  
  }

  ngOnInit(){
    this.productService.getProducts().subscribe((res:any)=>{
      this.products.set(res.products);
      console.log(this.products());
      
    })
  }
}
