import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  size: number;
  cart = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.product = await this.productService.getById(parseInt(params.id, 10));
    });
  }

  handleSelectSize(event) {
    return this.size = event.target.value;
  }

  handleAddToCart(pSku, pSize) {
    const newCartItem = {
      customerId: JSON.parse(localStorage.getItem('customerIdKanala')),
      sku: pSku,
      size: pSize,
      quantity: 1,
      price: this.product.product[0].price,
      title: this.product.product[0].title,
      image: `http://localhost:3000${this.product.product[0].image_1}`
    };

    if (localStorage.getItem('cart') !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
    this.cart.push(newCartItem);
    localStorage.setItem('cart', JSON.stringify(this.cart));

    this.router.navigate(['/cart']);
  }

}
