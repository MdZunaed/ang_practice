import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsDto } from './product';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getApiUrl="https://dummyjson.com/products?limit=10";
  postApiUrl= "https://jsonplaceholder.typicode.com/posts";
  putPatchDeleteApiUrl = (id: string | number): string => `https://jsonplaceholder.typicode.com/posts/${id}`;


  constructor(private http:HttpClient){}

  getProducts(){
    return this.http.get<ProductsDto>(this.getApiUrl);
  }

  postProduct(payload:any){
    return this.http.post(this.postApiUrl, payload);
  }
}
