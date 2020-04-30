import { Component, OnInit } from '@angular/core';
import {Product} from '../interfaces/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../service/product.service';
import {CartService} from '../service/cart.service';
import {Cart} from '../interfaces/Cart';
import {Item} from '../interfaces/Item';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  items: Item[];
  private sub: any;
  finalPrice: number;
  user: string;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.user = localStorage.getItem('currentUser')
    this.getCartProducts();
    this.finalPrice = 0;
    // console.log(this.items);
  }

  getCartProducts(): void {
    this.cartService.getCartDetail().subscribe(items =>  this.items = items );
    // console.log(this.items);
  }


  remove(slug: string): void {
    // console.log('Aloooo  ' + slug);
    this.cartService.remove(slug);
    location.reload();
  }

}