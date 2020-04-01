import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[];
  prod: any;
  prodFromDB: any;
  classMaxReached: boolean;

  constructor(private orderService: OrdersService, private productService: ProductService, private router: Router) {
    this.classMaxReached = false;
  }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if (this.cart[0].customerId === null) {
      this.cart[0].customerId = JSON.parse(localStorage.getItem('customerIdKanala'));
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  decrementQuantity(sku) {
    this.prod = this.cart.find(item => item.sku === sku);
    if (this.prod.quantity !== 0) {
      this.prod.quantity = this.prod.quantity - 1;
    }
    if (this.prod.quantity === 0) {
      this.deleteItemFromCart(sku);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.classMaxReached = false;
  }

  async incrementQuantity(sku) {
    this.prod = this.cart.find(item => item.sku === sku);
    this.prodFromDB = await this.productService.getById(sku);
    const maxQuantityPerSize = this.prodFromDB.sizes.find(item => item.number === parseInt((this.prod.size), 10));

    this.prod.quantity = this.prod.quantity + 1;
    localStorage.setItem('cart', JSON.stringify(this.cart));

    if (this.prod.quantity >= maxQuantityPerSize.quantity) {
      this.classMaxReached = true;
    }
  }

  deleteItemFromCart(sku) {
    const pos = this.cart.findIndex(item => item.sku === sku);
    this.cart.splice(pos, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  calculateTotal() {
    let total = 0;
    for (const item of this.cart) {
      total += item.price * item.quantity;
    }
    return total;
  }

  generateOrder() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.orderService.createOrder(this.cart);
    localStorage.removeItem('cart');
    this.router.navigate(['/']);
  }

}
