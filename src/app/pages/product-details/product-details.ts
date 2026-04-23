import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products/products';
import { Product } from '../../services/products/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  constructor(private route: ActivatedRoute, private products: Products) {
  }

  product = signal<Product | undefined>(undefined);
  postProductResponse = signal<any>(undefined);

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    this.products.getProducts().subscribe((data) => {

      data.products.filter((product: any) => {
        if (product.id.toString() == productId) {
          this.product.set(product);
        }
      })
    })
  }

  sendProduct() {
    this.products.postProduct(this.product()).subscribe((res) => {
      this.postProductResponse.set(JSON.stringify(res));
    })
  }
}
