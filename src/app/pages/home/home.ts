import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from '../../components/product/product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, ProductList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {


}
