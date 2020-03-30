import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: [];

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  decrementQuantity(sku) {
    const prod: any = this.cart.find(item => item['sku'] === sku);
    if (prod.quantity !== 0) {
      prod.quantity = prod.quantity - 1;
    }
    if (prod.quantity === 0) {
      this.deleteItemFromCart(sku);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  incrementQuantity(sku) {
    const prod: any = this.cart.find(item => item['sku'] === sku);
    prod.quantity = prod.quantity + 1;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteItemFromCart(sku) {
    const pos = this.cart.findIndex(item => item['sku'] === sku);
    this.cart.splice(pos, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  calculateTotal() {
    let total = 0;
    for (const item of this.cart) {
      total += item['price'] * item['quantity'];
    }
    return total;
  }

}
