import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  productsApiUrl="https://dummyjson.com/products?limit=10";
  constructor(private http:HttpClient){}

  getProducts<Product>(){
    return this.http.get(this.productsApiUrl);
  }
}
