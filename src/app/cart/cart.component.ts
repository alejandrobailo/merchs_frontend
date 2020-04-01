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

    // Añade el customerId al carrito, ya que el carrito se había creado antes de que el cliente estuviera logueado
    if (this.cart[0].customerId === null) {
      this.cart[0].customerId = JSON.parse(localStorage.getItem('customerIdKanala'));
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  decrementQuantity(sku, size) {
    this.prod = this.cart.find(item => item.sku === sku && item.size === size);
    if (this.prod.quantity !== 0) {
      this.prod.quantity = this.prod.quantity - 1;
    }
    if (this.prod.quantity === 0) {
      this.deleteItemFromCart(sku, size);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.classMaxReached = false;
  }

  async incrementQuantity(sku, size) {
    this.prod = this.cart.find(item => item.sku === sku && item.size === size);
    this.prodFromDB = await this.productService.getById(sku);
    const maxQuantityPerSize = this.prodFromDB.sizes.find(item => item.number === parseInt((this.prod.size), 10));

    this.prod.quantity = this.prod.quantity + 1;
    localStorage.setItem('cart', JSON.stringify(this.cart));

    if (this.prod.quantity >= maxQuantityPerSize.quantity) {
      this.classMaxReached = true;
    }
  }

  deleteItemFromCart(sku, size) {
    const pos = this.cart.findIndex(item => item.sku === sku && item.size === size);
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

  isCartEmpty() {
    // Para ocultar el botón de Generar Pedido si el carrito está vacío
    if (localStorage.getItem('cart') !== '[]') {
      return false;
    } else {
      return true;
    }
  }

  async generateOrder() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cart['totalAmount'] = this.calculateTotal();

    // Creo un registro en la tabla Order con los datos del pedido
    await this.orderService.createOrder(this.cart);

    // Creo tantos registros en la tabla Product-Order (tbi) como items haya en el carrito
    for (const item of this.cart) {
      await this.orderService.createOrderItem(item);
    }
    localStorage.removeItem('cart');
    this.router.navigate(['/']);
  }

}
