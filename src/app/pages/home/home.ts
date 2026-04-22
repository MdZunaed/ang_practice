import { Component } from '@angular/core';
import { Products } from '../../services/products/products';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(private productService: Products){
  
  }

  ngOnInit(){
    this.productService.getProducts().subscribe((res:any)=>{
      console.log(res);
    })
  }
}
